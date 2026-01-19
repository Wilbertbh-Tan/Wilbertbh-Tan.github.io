const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const header = document.querySelector(".header");
const topNav = document.querySelector(".nav--top");
const bottomNav = document.querySelector(".nav--bottom");
const divider = document.querySelector(".header__divider");

function setMenuOpen(isOpen) {
  if (!menuOverlay || !menuToggle) return;
  menuOverlay.classList.toggle("is-open", isOpen);
  menuOverlay.setAttribute("aria-hidden", String(!isOpen));
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
}

function updateClock() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type)?.value || "";
  const timeString = `${get("hour")}:${get("minute")}:${get("second")}`;
  const period = get("dayPeriod");

  document.querySelectorAll(".clock__time").forEach((el) => {
    el.textContent = timeString;
  });
  document.querySelectorAll(".clock__period").forEach((el) => {
    el.textContent = period;
  });
}

function toggleMenu() {
  if (!menuOverlay) return;
  const isOpen = menuOverlay.classList.contains("is-open");
  setMenuOpen(!isOpen);
}

function updateHeaderMetrics() {
  if (!header) return;
  const headerRect = header.getBoundingClientRect();
  const height = Math.ceil(headerRect.height);
  const topHeight = topNav ? Math.ceil(topNav.getBoundingClientRect().height) : 0;
  const dividerHeight = divider ? Math.ceil(divider.getBoundingClientRect().height) : 0;
  let collapse = topHeight + dividerHeight;
  if (bottomNav && bottomNav.offsetParent !== null) {
    const bottomTop = bottomNav.getBoundingClientRect().top;
    collapse = Math.max(0, Math.round(bottomTop - headerRect.top));
  }
  document.documentElement.style.setProperty("--header-offset", `${height}px`);
  document.documentElement.style.setProperty("--header-collapse", `${collapse}px`);
}

let lastScrollY = window.scrollY;
let scrollTicking = false;
let isScrollingToHome = false;
let isNavScrolling = false;

function updateHeaderOnScroll() {
  const currentY = window.scrollY;
  if (currentY > 0) {
    document.body.classList.add("has-scrolled");
  }
  const isScrolled = currentY > 1;
  const wasScrolled = document.body.classList.contains("is-scrolled");
  document.body.classList.toggle("is-scrolled", isScrolled);
  if (isScrolled !== wasScrolled && !isNavScrolling && !isScrollingToHome) {
    updateHeaderMetrics();
  }

  if (menuOverlay?.classList.contains("is-open")) {
    document.body.classList.remove("nav-collapsed");
    lastScrollY = currentY;
    return;
  }

  // When scrolling to Home, keep header expanded to prevent flickering
  if (isScrollingToHome) {
    document.body.classList.remove("nav-collapsed");
    if (currentY <= 0) {
      isScrollingToHome = false;
    }
    lastScrollY = currentY;
    return;
  }

  // When scrolling via nav link, keep header collapsed to prevent flickering
  if (isNavScrolling) {
    lastScrollY = currentY;
    return;
  }

  if (currentY <= 0) {
    // Only show full header when at the very top
    document.body.classList.remove("nav-collapsed");
  } else if (currentY > 1) {
    // Collapse header as soon as scrolled down
    document.body.classList.add("nav-collapsed");
  }

  lastScrollY = currentY;
}

menuToggle?.addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-loaded");
  updateHeaderMetrics();
  updateHeaderOnScroll();
  updateClock();
  window.setInterval(updateClock, 1000);
  document.querySelectorAll("a.norris").forEach((link) => {
    const text = link.textContent || "";
    const altText = link.getAttribute("data-alt") || text;
    link.textContent = "";
    const segmenter = "Segmenter" in Intl ? new Intl.Segmenter("en", { granularity: "grapheme" }) : null;
    const chars = segmenter
      ? Array.from(segmenter.segment(text), (s) => s.segment)
      : Array.from(text);
    const altChars = segmenter
      ? Array.from(segmenter.segment(altText), (s) => s.segment)
      : Array.from(altText);
    const computed = getComputedStyle(link);
    const measurer = document.createElement("span");
    measurer.style.position = "absolute";
    measurer.style.visibility = "hidden";
    measurer.style.whiteSpace = "pre";
    measurer.style.fontFamily = computed.fontFamily;
    measurer.style.fontSize = computed.fontSize;
    measurer.style.fontWeight = computed.fontWeight;
    measurer.style.letterSpacing = computed.letterSpacing;
    measurer.style.fontStyle = computed.fontStyle;
    measurer.style.fontVariant = computed.fontVariant;
    measurer.style.textTransform = computed.textTransform;
    document.body.appendChild(measurer);
    const measureText = (value) => {
      measurer.textContent = value;
      return measurer.getBoundingClientRect().width;
    };
    const baseWidth = measureText(text);
    const altWidth = altText ? measureText(altText) : baseWidth;
    link.style.minWidth = `${Math.ceil(Math.max(baseWidth, altWidth))}px`;
    const baseLayer = document.createElement("span");
    baseLayer.className = "norris__layer norris__layer--base";
    const altLayer = document.createElement("span");
    altLayer.className = "norris__layer norris__layer--alt";
    chars.forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "norris__char";
      span.textContent = ch === " " ? "\u00A0" : ch;
      span.style.setProperty("--index", i);
      baseLayer.appendChild(span);
    });
    altChars.forEach((ch, i) => {
      const span = document.createElement("span");
      span.className = "norris__char";
      span.textContent = ch === " " ? "\u00A0" : ch;
      span.style.setProperty("--index", i);
      altLayer.appendChild(span);
    });
    link.appendChild(baseLayer);
    link.appendChild(altLayer);
    measurer.remove();
  });
  document.querySelectorAll(".email-link").forEach((link) => {
    const buildEmail = () => {
      const user = link.getAttribute("data-user");
      const domain = link.getAttribute("data-domain");
      const tld = link.getAttribute("data-tld");
      if (!user || !domain || !tld) return null;
      return `${user}@${domain}.${tld}`;
    };
    link.addEventListener("click", (e) => {
      const email = buildEmail();
      if (!email) return;
      e.preventDefault();
      link.setAttribute("href", `mailto:${email}`);
      window.location.href = `mailto:${email}`;
    });
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const cards = document.querySelectorAll(".project-card");
  if (prefersReducedMotion.matches) {
    cards.forEach((card) => card.classList.add("is-visible"));
  } else if (cards.length) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    cards.forEach((card) => cardObserver.observe(card));
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOverlay?.classList.contains("is-open")) {
    setMenuOpen(false);
  }
});

// Close dropdown after clicking an in-page link (one-page site)
document.querySelectorAll('#menuOverlay a[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => setMenuOpen(false));
});

// Prevent flickering when clicking nav links (only target actual nav links, not project cards)
document.querySelectorAll('.nav__links a[href^="#"], .menu-overlay__links a[href^="#"], .nav__logo[href^="#"]').forEach((a) => {
  a.addEventListener("click", () => {
    const href = a.getAttribute("href");
    // Disable transitions during nav scroll
    document.body.classList.add("nav-scrolling");
    
    if (href === "#home") {
      // Scrolling to Home - expand header immediately
      isScrollingToHome = true;
      isNavScrolling = false;
      document.body.classList.remove("nav-collapsed");
    } else {
      // Scrolling to other sections - keep header collapsed
      isNavScrolling = true;
      isScrollingToHome = false;
      document.body.classList.add("nav-collapsed");
    }
    
    // Re-enable transitions after scroll animation completes
    setTimeout(() => {
      isNavScrolling = false;
      isScrollingToHome = false;
      document.body.classList.remove("nav-scrolling");
      lastScrollY = window.scrollY;
    }, 800);
  });
});

// Prevent project card placeholder links from scrolling to top
document.querySelectorAll('.project-card__link[href="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

window.addEventListener("resize", () => {
  updateHeaderMetrics();
  updateHeaderOnScroll();
  if (window.innerWidth > 768 && menuOverlay?.classList.contains("is-open")) {
    setMenuOpen(false);
  }
});

window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  window.requestAnimationFrame(() => {
    updateHeaderOnScroll();
    scrollTicking = false;
  });
});