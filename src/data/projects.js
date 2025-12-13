export const projects = [
  {
    id: 'rag-report-generation',
    title: 'RAG Report Generation System',
    description: 'End-to-end Retrieval-Augmented Generation system for deep research report generation with real-time market data crawling, news aggregation, and sentiment analysis with deterministic quoting.',
    tags: ['Finance', 'LLMs', 'Web Scraping'],
    year: '2024',
    techStack: ['Python', 'LangChain', 'Vector DB', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    fullDescription: `
# overview

developed an end-to-end RAG (Retrieval-Augmented Generation) system for deep research report generation. the system combines real-time web crawling, market data aggregation, news sentiment analysis, and deterministic quoting to produce comprehensive research reports.

## what it does

- crawls real-time market data and news sources
- performs sentiment analysis on news articles and social media
- retrieves relevant information using vector embeddings
- generates detailed research reports with deterministic citations
- maintains source attribution and fact-checking capabilities

## technical implementation

**architecture:**
- langchain for orchestrating the RAG pipeline
- vector database for semantic search and retrieval
- custom web crawler for real-time data collection
- llm integration for report generation
- citation tracking system for deterministic quoting

**challenges solved:**
- built reliable web crawlers that handle rate limiting and anti-bot measures
- implemented efficient vector embedding and similarity search
- designed citation system to ensure accurate source attribution
- optimized retrieval strategy to balance context window and relevance

## what i learned

this project deepened my understanding of retrieval systems, information extraction from unstructured data, and building production-ready AI applications. i gained experience with vector databases, semantic search, and designing systems that prioritize factual accuracy and source attribution.
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
    year: '2024',
    techStack: ['Python', 'MediaPipe', 'YOLO', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    fullDescription: `
# overview

built an eye and gaze tracking system for mobile devices that enables hands-free screen control using only eye movements. the system uses multi-stage models combining mediapipe and yolo for robust face detection, eye tracking, and gaze estimation.

## what it does

- detects faces and facial landmarks in real-time on mobile devices
- tracks eye movements with sub-pixel accuracy
- estimates gaze direction to control screen elements
- enables hands-free navigation and interaction
- runs efficiently on mobile hardware with optimized models

## technical implementation

**models & frameworks:**
- mediapipe for facial landmark detection
- yolo for face detection and tracking
- custom gaze estimation model
- opencv for image processing
- optimized for mobile deployment (quantization, pruning)

**challenges solved:**
- achieved real-time performance on mobile hardware through model optimization
- handled varying lighting conditions and head poses
- calibrated gaze estimation for individual users
- reduced latency for responsive interaction

## impact

this system has potential applications in accessibility technology, enabling people with motor impairments to interact with mobile devices using only their eyes.

## what i learned

working on this project taught me about real-time computer vision on resource-constrained devices, multi-stage model architectures, and the importance of optimization for production deployment. i gained deep experience with mobile cv frameworks and user calibration systems.
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

led development of the electrical model suite for electrical transformer health analytics at ibm expert labs. this enterprise ml solution was integrated into ibm maximo and deployed to over 1,000 customers worldwide for predictive maintenance and asset management.

## what it does

- predicts electrical transformer failures before they occur
- detects anomalies in sensor data and operating conditions
- performs time-series forecasting for maintenance planning
- provides explainable ai insights for decision-making
- integrates seamlessly with ibm maximo asset management platform

## technical implementation

**ml pipeline:**
- anomaly detection using isolation forests and autoencoders
- time-series forecasting with lstm and transformer models
- survival modeling for remaining useful life prediction
- feature engineering from sensor data (temperature, voltage, oil quality)
- mlops best practices: monitoring, governance, versioning

**deployment:**
- containerized models with docker/kubernetes
- rest api for maximo integration
- real-time inference on streaming sensor data
- model monitoring and drift detection
- automated retraining pipelines

**challenges solved:**
- handled imbalanced datasets with limited failure examples
- built interpretable models for critical infrastructure decisions
- scaled solution to 1,000+ enterprise deployments
- achieved high availability and low latency requirements

## impact

- deployed to 1,000+ enterprise customers worldwide
- integrated into ibm maximo platform
- presented solution to clients and senior management
- served as primary code contributor and technical lead

## what i learned

this project taught me about building production ml systems at enterprise scale, mlops best practices, stakeholder management, and the importance of model interpretability in critical infrastructure applications.
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
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    fullDescription: `
# overview

developed firmware and embedded control systems for an affordable smart wheelchair at gogotech, funded by the melinda gates foundation and techstars. the system enables autonomous navigation and obstacle avoidance using lightweight computer vision models running on-device.

## what it does

- autonomous navigation in indoor environments
- real-time obstacle detection and avoidance
- user control interface with multiple input modes
- power management for extended battery life
- emergency stop and safety systems

## technical implementation

**embedded systems:**
- esp32 microcontroller for processing and control
- custom c/c++ firmware for motor control and sensors
- lightweight computer vision models (mobilenet, tinyml)
- bluetooth connectivity for mobile app integration
- battery management and power optimization

**computer vision:**
- on-device object detection for obstacles
- depth estimation using monocular camera
- path planning algorithms (a*, dynamic window approach)
- real-time inference optimized for embedded hardware

**challenges solved:**
- deployed cv models on resource-constrained hardware (esp32)
- achieved real-time performance with limited memory and compute
- ensured safety and reliability for mobility device
- designed modular firmware for easy maintenance

## impact

created an affordable smart wheelchair solution for underserved communities, making assistive technology more accessible globally.

## what i learned

this project taught me about embedded systems development, on-device ml inference, safety-critical system design, and the challenges of deploying ai in resource-constrained environments.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'wearable-gait-analysis',
    title: 'Wearable Gait Analysis Device',
    description: 'IoT wearable for gait analytics and fall-risk assessment deployed across multiple Singapore eldercare facilities. Won Second Prize at Singapore Medical Grand Challenge ($20,000 SGD).',
    tags: ['Healthcare', 'Embedded Systems', 'Hardware'],
    year: '2019',
    techStack: ['C/C++', 'ESP32', 'Altium', 'BLE'],
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80',
    fullDescription: `
# overview

designed and deployed a wearable gait analytics and fall-risk assessment device for singapore's eldercare facilities. the system enables remote clinical assessment for physical therapists and won second prize and marketing prize at the singapore medical grand challenge.

## what it does

- monitors gait patterns using imu sensors (accelerometer, gyroscope)
- assesses fall risk through machine learning algorithms
- enables remote monitoring for physical therapists
- provides real-time alerts for abnormal gait patterns
- stores longitudinal data for tracking patient progress

## technical implementation

**hardware:**
- esp32 microcontroller for processing and wireless connectivity
- 9-axis imu (accelerometer, gyroscope, magnetometer)
- bluetooth le for low-power communication
- rechargeable battery with power management
- custom pcb design using altium designer

**software:**
- c/c++ firmware for sensor fusion and data processing
- gait feature extraction (stride length, cadence, symmetry)
- fall risk classification model
- mobile app for clinical dashboard
- cloud backend for data storage and analytics

**challenges solved:**
- achieved accurate gait analysis with consumer-grade sensors
- optimized battery life for full-day monitoring
- designed comfortable, unobtrusive wearable form factor
- ensured data privacy and security for healthcare application

## impact

- deployed across multiple singapore eldercare facilities
- enabled remote clinical assessment for physical therapists
- awarded second prize ($15,000 sgd) and marketing prize ($5,000 sgd)
- featured in local news media

## what i learned

this project taught me about healthcare iot device development, sensor fusion algorithms, designing for elderly users, and navigating healthcare regulations and privacy requirements.
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

led the nus igem team in engineering a novel biological kill-switch system for synthetic biology containment. served as computational modeling lead, using ordinary differential equations to inform wet-lab experimental design. awarded gold medal (top bracket among 310 teams worldwide).

## what it does

- provides biosafety containment for genetically modified organisms
- implements multiple-layered kill-switch mechanisms
- enables customizable kill-switch design for different applications
- integrates with existing synthetic biology toolkits
- ensures environmental safety of gmos

## technical implementation

**computational modeling:**
- matlab for ode-based modeling of genetic circuits
- advancesyn for pathway simulation
- parameter optimization for kill-switch efficiency
- sensitivity analysis for robust design
- model-guided experimental design for wet-lab team

**biological design:**
- engineered genetic circuits with multiple fail-safes
- toxin-antitoxin systems for containment
- environmental sensors for conditional activation
- standardized biobricks for easy integration

**project management:**
- directed wet-lab experimental design based on computational models
- conducted stakeholder engagement and policy research
- secured equipment sponsorship and grant funding
- collaborated with international igem teams (us, france, uk, pakistan, germany)

## impact

- awarded gold medal at igem grand jamboree (top bracket among 310 teams)
- contributed to biosafety best practices in synthetic biology
- presented research at international conference in boston
- integrated stakeholder feedback into system design

## what i learned

this project taught me about synthetic biology, computational modeling of biological systems, interdisciplinary teamwork, project management, and science policy. i learned how to bridge computational and experimental work and communicate complex science to diverse audiences.
    `,
    links: {
      github: null,
      live: 'http://2017.igem.org/Team:NUS_Singapore-A'
    }
  },
  {
    id: 'actinspace-vlm-thrusters',
    title: 'VLM Thrusters for Cube Satellites',
    description: '3D-printed water-vapor micro-thrusters for low-cost, environmentally friendly cubesat propulsion. Won Second Prize at CNES-ESA ActinSpace global competition and Airbus Defence & Innovation Prize.',
    tags: ['Aerospace', 'Hardware', 'Prototyping'],
    year: '2017',
    techStack: ['CAD', '3D Printing', 'ANSYS'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
    fullDescription: `
# overview

developed 3D-printed water-vapor micro-thrusters (VLMs) for cube satellites as team lead in the CNES-ESA ActinSpace Challenge. created a low-cost, environmentally friendly propulsion system for nano-satellites, validating the viability of lightweight, low-power thrust systems for cubesat maneuvering.

## what it does

- provides propulsion for cubesats and nano-satellites
- uses water vapor as environmentally friendly propellant
- enables orbital maneuvering and station-keeping
- offers low-cost alternative to traditional chemical thrusters
- designed for easy integration with cubesat platforms

## technical implementation

**design:**
- 3d-printed thruster housing and nozzle assembly
- vaporizing liquid micro-thruster technology
- low-power heating elements for water vaporization
- compact form factor compatible with cubesat standards
- modular design for scalability

**validation:**
- early-stage prototype testing and characterization
- thrust measurement and efficiency analysis
- thermal modeling and heat dissipation
- integration planning with cubesat platforms

**challenges solved:**
- designed for manufacturability with 3d printing
- optimized for low power consumption in space environment
- ensured reliability and safety with non-toxic propellant
- minimized mass and volume constraints

## impact

- awarded second prize at CNES-ESA ActinSpace global competition (toulouse, france)
- won CNES-ESA Airbus Defence & Innovation Prize
- awarded first prize at Singapore Space & Technology Competition
- presented at toulouse space center and singapore space challenge
- demonstrated feasibility of low-cost propulsion for small satellites

## what i learned

this project taught me about aerospace engineering, propulsion systems, rapid prototyping, and the unique constraints of space systems design. i gained experience in international competition, cross-functional teamwork, and presenting technical concepts to industry experts.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'neuromorphic-spiking-networks',
    title: 'Neuromorphic Spiking Neural Networks',
    description: 'Spin-wave implementation of spiking neural networks with spike-timing-dependent plasticity. Honors thesis research using micromagnetic simulations on high-performance clusters.',
    tags: ['Research', 'Neuromorphic Computing', 'Spintronics'],
    year: '2020',
    techStack: ['Mumax3', 'Go', 'HPC', 'Python'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    fullDescription: `
# overview

designed spin-wave implementations of spiking neural networks with spike-timing-dependent plasticity (STDP) for my honors thesis at NUS. developed micromagnetic simulations using Mumax3 to model spin-wave propagation and plasticity dynamics on high-performance computing clusters.

## what it does

- implements spiking neural networks using spin waves in magnetic materials
- models spike-timing-dependent plasticity for learning
- simulates neuromorphic computing with novel hardware substrate
- explores energy-efficient alternatives to conventional neural networks
- investigates spin-wave propagation and interference patterns

## technical implementation

**simulation framework:**
- mumax3 (Go) for micromagnetic simulations
- modeling of spin-wave propagation in magnetic thin films
- implementation of STDP learning rules
- parameter sweeps for optimization
- high-performance cluster computing for large-scale simulations

**physics & modeling:**
- magnetization dynamics and spin-wave interference
- coupling between spin-wave oscillators
- plasticity mechanisms based on magnetic properties
- energy consumption analysis
- device-level and network-level modeling

**challenges solved:**
- bridged physics of spin waves with neural network computation
- designed learning mechanisms compatible with spin-wave dynamics
- optimized simulation parameters for computational efficiency
- validated models against theoretical predictions

## impact

- completed B.Eng honors thesis supervised by Prof. Kelvin Xuanyao Fong
- examined by Prof. Gengchiau Liang
- contributed to understanding of neuromorphic computing substrates
- explored energy-efficient hardware for AI

## what i learned

this project deepened my understanding of neuromorphic computing, computational physics, high-performance computing, and the intersection of materials science with artificial intelligence. i learned how to conduct independent research and communicate complex technical concepts in written thesis format.
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

investigated framework for bioelectric signal interfacing between bacterial systems and computational platforms for glucose monitoring and synthesis. transformed time-series electrical signals into images using novel encoding methods and classified patterns with deep learning.

## what it does

- interfaces between bacterial biosensors and computer systems
- monitors glucose levels using bacterial electrical signals
- translates bioelectric signals into actionable data
- enables real-time monitoring of biological processes
- explores bacteria as living sensors

## technical implementation

**signal processing:**
- gramian angular field (GAF) encoding to convert time series to images
- markov transition field (MTF) encoding for pattern representation
- feature extraction from bioelectric signals
- noise filtering and signal preprocessing

**machine learning:**
- residual neural network (ResNet) for image classification
- time-series pattern recognition
- training on bacterial response patterns
- validation against ground truth glucose measurements

**biological system:**
- engineered bacterial strains as biosensors
- bioelectric signal generation and measurement
- microfluidic platforms for controlled experiments
- real-time data acquisition systems

**challenges solved:**
- bridged biological signals with computational analysis
- handled noisy, variable bioelectric measurements
- designed robust classification pipeline
- integrated wet-lab experiments with computational models

## impact

- completed undergraduate research project (UROP) supervised by Prof. Chueh Loo Poh
- demonstrated feasibility of bacteria-computer interfaces
- contributed to synthetic biology and biosensor research
- explored novel signal processing techniques for biological data

## what i learned

this project taught me about synthetic biology, bioelectric signals, signal processing, and the challenges of interfacing biological and computational systems. i gained experience in wet-lab techniques, time-series analysis, and applying deep learning to unconventional data modalities.
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

developed predictive control algorithms to enhance droop control response in microgrid systems at rolls-royce r&d systems integration. designed network architecture for reliable industrial communication and human-machine interfaces for programmable logic controllers.

## what it does

- predicts load and generation fluctuations in microgrids
- enhances traditional droop control with predictive algorithms
- ensures stable power distribution in distributed generation systems
- enables faster response to grid disturbances
- provides visualization and control interface for operators

## technical implementation

**control algorithms:**
- predictive control models for load forecasting
- enhanced droop control with anticipatory adjustments
- stability analysis and parameter tuning
- real-time optimization of power distribution

**network & communication:**
- designed network architecture for programmable logic controllers (PLCs)
- ensured data reliability in industrial environments
- implemented redundant communication paths
- latency optimization for real-time control

**human-machine interface:**
- designed UI for PLC control and monitoring
- real-time visualization of microgrid state
- alarm and event management
- operator controls for manual intervention

**challenges solved:**
- integrated predictive models with existing control systems
- ensured reliability in critical power infrastructure
- balanced prediction accuracy with computational constraints
- designed intuitive interfaces for complex systems

## impact

- completed research internship at rolls-royce r&d systems integration
- supervised by prof. sanjib kumar panda & dr. souvik dasgupta
- contributed to microgrid control research
- gained experience in industrial control systems

## what i learned

this project taught me about power systems, control theory, industrial automation, and the challenges of deploying algorithms in critical infrastructure. i learned about plc programming, industrial networking, and designing systems for high reliability environments.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'nomnomsnap',
    title: 'NomNomSnap - Computer Vision for Dietary Assessment',
    description: 'Computer vision system for automated dietary assessment and nutritional tracking. Won First Prize at Australian Health Startup Competition 2016.',
    tags: ['Healthcare', 'Computer Vision'],
    year: '2016',
    techStack: ['Python', 'TensorFlow', 'iOS', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    fullDescription: `
# overview

developed nomnomsnap, a computer vision system for automated dietary assessment and nutritional tracking. the application uses image recognition to identify food items and estimate portion sizes, providing users with instant nutritional information.

## what it does

- recognizes food items from smartphone photos
- estimates portion sizes and nutritional content
- tracks dietary intake and nutritional goals
- provides personalized dietary recommendations
- generates nutritional reports and insights

## technical implementation

**computer vision:**
- food recognition using deep learning models
- portion size estimation from single images
- multi-food detection in complex scenes
- database of food items and nutritional information

**mobile application:**
- user-friendly camera interface
- real-time food recognition
- nutritional tracking and logging
- data visualization and progress tracking

**challenges solved:**
- handled variety in food appearance and presentation
- accurate portion size estimation without reference objects
- balanced model complexity with mobile performance
- curated diverse food database for recognition

## impact

- won first prize at australian health startup competition (2016)
- demonstrated feasibility of ai-powered dietary tracking
- contributed to digital health and nutrition technology

## what i learned

this project taught me about computer vision for real-world applications, mobile app development, and the challenges of building consumer health technology. i gained experience in startup competitions, pitching, and translating research into user-facing products.
    `,
    links: {
      github: null,
      live: null
    }
  },
  {
    id: 'spacex-hyperloop',
    title: 'SpaceX Hyperloop Competition',
    description: 'Keioalpha Hyperloop Team - Top 30 finalist among 120+ teams worldwide at SpaceX Hyperloop Pod Competition. Designed high-speed transportation pod prototype.',
    tags: ['Aerospace', 'Mechanical'],
    year: '2016',
    techStack: ['SolidWorks', 'ANSYS', 'CFD'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
    fullDescription: `
# overview

participated in the spacex hyperloop pod competition as part of the keioalpha hyperloop team, achieving top 30 finalist status among 120+ teams worldwide. contributed to designing and prototyping a high-speed transportation pod for elon musk's hyperloop concept.

## what it does

- high-speed transportation pod for hyperloop system
- designed for low-pressure tube environment
- propulsion, levitation, and braking systems
- safety systems for emergency scenarios
- modular design for testing and iteration

## technical implementation

**mechanical design:**
- aerodynamic pod shell design
- structural analysis and optimization
- material selection for weight and strength
- thermal management systems

**systems integration:**
- propulsion system design
- magnetic levitation or air bearing systems
- braking and deceleration mechanisms
- power and control systems

**competition participation:**
- detailed technical documentation
- presentations to spacex judges
- prototype testing and validation
- collaboration with international team

## impact

- achieved top 30 finalist status (among 120+ teams worldwide)
- presented design at spacex hyperloop competition (texas a&m)
- gained recognition for innovative transportation design
- contributed to advancing hyperloop technology

## what i learned

this project taught me about high-speed transportation systems, aerodynamics, mechanical design, and working on large interdisciplinary teams. i learned about technical competition preparation, systems engineering, and collaborating across different engineering disciplines.
    `,
    links: {
      github: null,
      live: null
    }
  }
];
