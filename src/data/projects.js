export const projects = [
  {
    id: 'rag-report-generation',
    title: 'ShareSummarizer',
    description: 'High-performance RAG system for finance research combining web crawling, document processing, and intelligent Q&A with local LLMs and automatic web search when confidence is low.',
    tags: ['Finance', 'LLMs', 'Web Scraping', 'Deterministic Citations'],
    year: '2025',
    techStack: ['Python', 'Qwen 2.5-7B', 'Vector DB', 'CUDA'],
    image: '/images/sharesummarizer.png',
    fullDescription: `
# overview

ShareSummarizer is a high-performance RAG (Retrieval-Augmented Generation) system for finance research that combines web crawling, document processing, and intelligent Q&A. It uses local LLMs (Qwen 2.5-7B) with automatic web search when answers have low confidence.

## my role

Solo project - I designed the architecture, implemented all components, and conducted evaluation/testing. This includes the auto-recollection system, multi-domain vector store, hybrid confidence scoring, and domain classification.

## innovative features

**auto-recollection:** automatically triggers web search when confidence < 70%, progressively expanding search strategies. In testing, this improved confidence from 18% to 76% by adding 115 documents.

**multi-domain vector store:** 8 specialized domains (finance, news, research, government, etc.) with per-domain freshness policies. Finance docs expire in 7 days, news in 1 day.

**hybrid confidence scoring:** combines LLM evaluation (80%) with traditional metrics (20%) to validate answer quality. Flags issues like missing citations, outdated data, and speculation.

**domain classification:** automatically routes queries to relevant collections using keyword matching.

## key technical insight

The system's quality heavily depends on domain classification accuracy. A single missing keyword ("shares") caused queries to search 24 documents instead of 265, dropping confidence from 80% to 50%.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'eye-gaze-tracking',
    title: 'Eye & Gaze Tracking System',
    description: 'Mobile eye and gaze tracking system using multi-stage models (MediaPipe, YOLO) to enable hands-free screen control through eye movements and facial recognition.',
    tags: ['Healthcare', 'Mobile', 'Computer Vision'],
    year: '2025',
    techStack: ['Python', 'MediaPipe', 'YOLO', 'OpenCV'],
    image: '/images/gaze-tracking.gif',
    fullDescription: `
# overview

mobile eye and gaze tracking system that enables hands-free screen control using only eye movements. uses multi-stage models combining mediapipe and yolo for robust face detection, eye tracking, and gaze estimation on resource-constrained devices.

## my role

sole developer - designed the multi-stage pipeline architecture, implemented all cv models, optimized for mobile deployment, and built the user calibration system.

## innovative features

**two-stage detection pipeline:** first stage uses yolo for fast face/eye bounding box detection, second stage uses mediapipe for precise iris localization. this hierarchical approach balances speed and accuracy.

**mobile-first optimization:** achieved real-time inference through model quantization, pruning, and efficient memory management. handles varying lighting conditions and head poses robustly.

**adaptive calibration:** personalized gaze estimation that adapts to individual users' eye characteristics and device positioning.

## impact

accessibility technology enabling people with motor impairments to interact with mobile devices using only their eyes. demonstrated feasibility of complex cv pipelines on consumer mobile hardware.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'ibm-electrical-model-suite',
    title: 'IBM Electrical Model Suite',
    description: 'Enterprise ML solution for electrical transformer health analytics deployed to 1,000+ customers. Integrated into IBM Maximo for predictive maintenance and anomaly detection.',
    tags: ['Sustainability', 'Machine Learning', 'Time Series'],
    year: '2022-2024',
    techStack: ['Python', 'PyTorch', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    fullDescription: `
# overview

enterprise ml solution for electrical transformer health analytics, integrated into ibm maximo and deployed to 1,000+ customers worldwide. predicts transformer failures, detects anomalies, and provides explainable insights for predictive maintenance.

## my role

technical lead and primary code contributor at ibm expert labs. led architecture decisions, implemented core ml models, managed deployment pipeline, and presented to clients and senior management.

## innovative features

**multi-model ensemble:** combines isolation forests, autoencoders, and lstm models for robust anomaly detection and time-series forecasting. survival modeling for remaining useful life prediction.

**interpretable predictions:** explainable ai outputs for critical infrastructure decisions - operators need to understand why a transformer is flagged, not just that it is.

**enterprise-grade mlops:** containerized deployment with docker/kubernetes, model monitoring, drift detection, and automated retraining pipelines for 1,000+ concurrent deployments.

## impact

deployed to 1,000+ enterprise customers worldwide. integrated into ibm maximo asset management platform. demonstrated enterprise-scale ml systems with high availability and low latency requirements.
    `,
    links: {
      github: null,
      live: 'https://developer.ibm.com/apis/catalog/ai4industry--ibm-maximo-models-for-electric-transformers/api/API--ai4industry--ibm-maximo-models-for-electric-transformers#electrical_transformer_health_dga_model'
    }
  },
  {
    id: 'smart-wheelchair',
    title: 'Smart Wheelchair Control System',
    description: 'Embedded control system and computer vision for an affordable smart wheelchair funded by the Melinda Gates Foundation, featuring real-time navigation and obstacle avoidance.',
    tags: ['Healthcare', 'Embedded Systems', 'Computer Vision'],
    year: '2021',
    techStack: ['C/C++', 'ESP32', 'TinyML', 'Bluetooth'],
    images: [
      '/images/abby/Follow_Mode_WebSection_af83d6fd-e2aa-4e3c-9bc2-5e2f87eaffbc.webp',
      '/images/abby/MFG_Techstars_Science_Fair.webp',
      '/images/abby/PXL_20211209_021750149.jpg'
    ],
    fullDescription: `
# overview

affordable smart wheelchair with autonomous navigation and obstacle avoidance, developed at gogotech with funding from the melinda gates foundation and techstars. runs lightweight computer vision models on-device using esp32 microcontroller.

## my role

firmware engineer - developed embedded control systems, implemented motor control and sensor fusion, integrated tinyml models for obstacle detection, and designed the bluetooth mobile app interface.

## innovative features

**tinyml on esp32:** deployed mobilenet-based object detection on severely resource-constrained hardware. achieved real-time inference through aggressive model optimization and efficient memory management.

**monocular depth estimation:** depth perception from single camera enables obstacle avoidance without expensive lidar or stereo setups, critical for affordability target.

**safety-first architecture:** multiple redundant safety systems including hardware emergency stop, software watchdogs, and fail-safe motor control for medical device reliability.

## impact

affordable assistive technology for underserved communities globally. demonstrated that sophisticated cv/ml systems can run on low-cost embedded hardware for accessibility applications.
    `,
    links: {
      github: null,
      live: { url: 'https://abbychair.myshopify.com/', label: 'abby wheelchair' }
    }
  },
  {
    id: 'neuromorphic-spiking-networks',
    title: 'Neuromorphic Spiking Neural Networks',
    description: 'Spin-wave implementation of spiking neural networks with spike-timing-dependent plasticity. Honors thesis research using micromagnetic simulations on high-performance clusters.',
    tags: ['Research', 'Neuromorphic Computing', 'Spintronics'],
    year: '2020',
    techStack: ['Mumax3', 'Go', 'HPC', 'Python'],
    image: '/images/neuromorphic/skyrmion.png',
    fullDescription: `
# overview

spin-wave implementations of spiking neural networks with spike-timing-dependent plasticity (stdp) for neuromorphic computing. honors thesis research using micromagnetic simulations to explore energy-efficient alternatives to conventional neural networks.

## my role

sole researcher for b.eng honors thesis supervised by prof. kelvin xuanyao fong. developed simulation framework, designed stdp learning rules compatible with spin-wave physics, and ran large-scale parameter sweeps on hpc clusters.

## innovative features

**spin-wave computing substrate:** uses magnetization dynamics in thin films instead of electrical signals. spin-wave interference enables analog computation with potentially lower energy than cmos.

**physical stdp implementation:** learning rules emerge naturally from spin-wave coupling dynamics, not implemented in software. plasticity based on magnetic material properties.

**hpc simulation framework:** mumax3-based simulations model device-level magnetization dynamics while exploring network-level learning behaviors.

## impact

b.eng honors thesis at nus. contributed to understanding of neuromorphic computing substrates and energy-efficient hardware for ai. explored novel intersection of materials physics and machine learning.
    `,
    links: {
      github: null,
      live: { url: 'https://1drv.ms/p/c/5c0d7963016aa40c/IQAMpGoBY3kNIIBcSXkAAAAAATlZNBxfPiDPeEq9rv0eKV8?e=WcxSgT', label: 'presentation' }
    }
  },
  {
    id: 'wearable-gait-analysis',
    title: 'Wearable Gait Analysis Device',
    description: 'IoT wearable for gait analytics and fall-risk assessment deployed across multiple Singapore eldercare facilities. Won Second Prize at Singapore Medical Grand Challenge ($20,000 SGD).',
    tags: ['Healthcare', 'Embedded Systems', 'Hardware'],
    year: '2019',
    techStack: ['C/C++', 'ESP32', 'Altium', 'BLE'],
    images: [
      '/images/gait/pcb.jpg',
      '/images/gait/award1.jpg',
      '/images/gait/award2.jpg',
      '/images/gait/award3.jpg'
    ],
    fullDescription: `
# overview

wearable gait analytics and fall-risk assessment device deployed across singapore eldercare facilities. enables remote clinical assessment for physical therapists using imu-based motion tracking and ml classification.

## my role

hardware and firmware lead - designed custom pcb using altium, developed sensor fusion algorithms, implemented fall-risk classification model, and built the clinical dashboard mobile app.

## innovative features

**consumer-grade sensor fusion:** achieved clinical-grade gait analysis accuracy using low-cost 9-axis imu. custom sensor fusion algorithms extract stride length, cadence, and symmetry metrics.

**longitudinal health tracking:** stores patient data over time to identify gradual changes in gait patterns that may indicate declining health or increased fall risk.

**full-day battery life:** aggressive power optimization with ble enables comfortable all-day monitoring without frequent charging - critical for elderly user adoption.

## impact

deployed across multiple singapore eldercare facilities. won second prize ($15,000 sgd) and marketing prize ($5,000 sgd) at singapore medical grand challenge. featured in local news media.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'microgrid-predictive-control',
    title: 'Predictive Control for Microgrids',
    description: 'Predictive control algorithms to enhance droop control response in microgrid systems by anticipating load and generation fluctuations. Research at Rolls-Royce R&D Systems Integration.',
    tags: ['Sustainability', 'Control Systems'],
    year: '2019',
    techStack: ['MATLAB', 'Simulink', 'PLC', 'HMI'],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    fullDescription: `
# overview

predictive control algorithms for microgrid systems, developed at rolls-royce r&d systems integration. enhances traditional droop control by anticipating load and generation fluctuations for faster grid response.

## my role

research intern supervised by prof. sanjib kumar panda & dr. souvik dasgupta. developed predictive control models, designed plc network architecture, and built human-machine interfaces for operator control.

## innovative features

**predictive droop enhancement:** anticipates load changes before they occur, enabling proactive adjustments to power distribution rather than reactive correction.

**industrial-grade reliability:** redundant communication paths and latency-optimized networking ensure real-time control performance in critical power infrastructure.

**operator-friendly hmi:** intuitive visualization of microgrid state with alarm management and manual override controls for safe operation.

## impact

research internship at rolls-royce r&d contributing to microgrid control systems. gained experience in industrial plc programming, real-time control systems, and critical infrastructure reliability requirements.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'actinspace-vlm-thrusters',
    title: 'VLM Thrusters for Cube Satellites',
    description: '3D-printed water-vapor micro-thrusters for low-cost, environmentally friendly cubesat propulsion. Won Second Prize at CNES-ESA ActinSpace global competition and Airbus Defence & Innovation Prize.',
    tags: ['Aerospace', 'Hardware', 'Prototyping'],
    year: '2018',
    techStack: ['CAD', '3D Printing', 'ANSYS'],
    images: [
      '/images/vlm/img1.jpg',
      '/images/vlm/img2.jpg',
      '/images/vlm/img3.jpg',
      '/images/vlm/img4.jpg'
    ],
    fullDescription: `
# overview

3d-printed water-vapor micro-thrusters for cubesat propulsion, developed as team lead for cnes-esa actinspace challenge. low-cost, environmentally friendly alternative to traditional chemical thrusters using water as propellant.

## my role

team lead - led mechanical design and prototyping, conducted thermal analysis, managed testing and validation, and presented to cnes-esa judges in toulouse.

## innovative features

**3d-printed propulsion:** entire thruster assembly including nozzle manufactured via additive manufacturing, dramatically reducing cost and enabling rapid iteration.

**water as propellant:** environmentally safe vaporizing liquid micro-thruster (vlm) technology. non-toxic, easy to handle, and compatible with cubesat safety requirements.

**low-power operation:** optimized heating elements achieve thrust with minimal power draw, critical for power-constrained cubesat missions.

## impact

second prize at cnes-esa actinspace global competition (toulouse). airbus defence & innovation prize. first prize at singapore space & technology competition. demonstrated feasibility of low-cost propulsion for nano-satellite constellations.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'bioelectric-interfacing',
    title: 'Bioelectric Interfacing with Bacteria',
    description: 'Framework for bioelectric signal interfacing between bacterial systems and computers for glucose monitoring. Used Gramian Angular Field encoding and ResNet for time-series classification.',
    tags: ['Research', 'Synthetic Biology', 'Deep Learning'],
    year: '2018',
    techStack: ['Python', 'PyTorch', 'ResNet', 'Signal Processing'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    fullDescription: `
# overview

framework for bioelectric signal interfacing between bacterial biosensors and computational platforms. uses novel time-series encoding methods to translate bacterial electrical signals into glucose measurements via deep learning classification.

## my role

undergraduate researcher (urop) supervised by prof. chueh loo poh. developed signal processing pipeline, implemented deep learning classifier, and conducted wet-lab experiments with engineered bacterial strains.

## innovative features

**gramian angular field encoding:** transforms 1d time-series bioelectric signals into 2d images, enabling use of powerful image classification cnns (resnet) for pattern recognition.

**bacteria as living sensors:** engineered bacterial strains generate measurable electrical signals in response to glucose concentration, creating biological sensing interface.

**robust signal classification:** deep learning pipeline handles noisy, variable bioelectric measurements from live bacterial cultures.

## impact

undergraduate research project demonstrating feasibility of bacteria-computer interfaces. contributed to synthetic biology and biosensor research. explored novel intersection of signal processing and biological systems.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'igem-biosafety-killswitch',
    title: 'Biosafety Kill-Switch System',
    description: 'Novel biological kill-switch system for synthetic biology containment. Led NUS iGEM team to Gold Medal (top bracket among 310 teams worldwide) with computational modeling and wet-lab design.',
    tags: ['Research', 'Synthetic Biology', 'Computational Biology'],
    year: '2017',
    techStack: ['MATLAB', 'AdvanceSyn', 'Python'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    fullDescription: `
# overview

novel biological kill-switch system for synthetic biology containment, developed with nus igem team. uses multi-layered toxin-antitoxin systems with environmental sensors for robust biosafety of genetically modified organisms.

## my role

computational modeling lead - developed ode-based models of genetic circuits in matlab to guide wet-lab experimental design. also led stakeholder engagement, secured sponsorship, and coordinated with international teams (us, france, uk, pakistan, germany).

## innovative features

**model-guided wet-lab design:** computational simulations predicted kill-switch efficiency before expensive experiments. sensitivity analysis identified critical parameters for robust design.

**multi-layered containment:** multiple independent kill-switch mechanisms ensure containment even if one system fails. environmental sensors enable conditional activation.

**standardized biobricks:** designed for integration with existing synthetic biology toolkits, enabling easy adoption by other researchers.

## impact

awarded gold medal at igem grand jamboree (top bracket among 310 teams worldwide). presented research at international conference in boston. contributed to biosafety best practices in synthetic biology community.
    `,
    links: {
      github: null,
      live: 'http://2017.igem.org/Team:NUS_Singapore-A'
    }
  }
];
