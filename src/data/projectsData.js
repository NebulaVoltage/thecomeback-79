export const PROJECTS_DATA = [
  {
    id: "smart-warehouse-navigation",
    number: "01",
    title: "Smart Warehouse Automation & Robot Navigation",
    categories: ["DSA", "SOFTWARE", "AI / ML"],
    primaryCategory: "DSA & Software",
    description: "A data-structures-and-algorithms-driven warehouse navigation system that models efficient movement through dynamic warehouse environments and visualizes optimal collision-free paths using graph-based pathfinding algorithms.",
    technologies: ["Dijkstra", "A* Search", "Graphs", "Pathfinding", "JavaScript/React", "Data Structures"],
    github: "https://github.com/NebulaVoltage",
    demo: "VIEW PROJECT",
    featured: true,
    details: {
      problem: "Autonomous mobile robots (AMRs) in high-density automated fulfillment centers frequently encounter congestion, static obstacles, and dynamic worker paths leading to sub-optimal routing and latency.",
      approach: "Built an interactive grid-and-graph matrix simulator using A* search with Manhattan heuristics and Dijkstra's algorithm. Modeled warehouse shelves as weighted nodes and dynamic obstacles with real-time priority queues.",
      technologies: "JavaScript (ES6+), React State Machine, Priority Queue Heap, Graph Data Structures, CSS Canvas Rendering",
      keyConcepts: "Graph Theory, Heuristic Pathfinding, State Management, Time Complexity Optimization O((V + E) log V)",
      result: "Achieved real-time dynamic path recalculation under 12ms for 100x100 warehouse grids, demonstrating path length optimization up to 28% over breadth-first search."
    }
  },
  {
    id: "space-mission-control",
    number: "02",
    title: "Space Mission Control System",
    categories: ["DSA", "SOFTWARE"],
    primaryCategory: "DSA & System Design",
    description: "A Java-based mission control software system demonstrating rigorous data structures, telemetry state management, custom linked-list operations, and stack-based emergency abort handling.",
    technologies: ["Java", "Linked Lists", "Stacks", "Queues", "State Management", "System Architecture"],
    github: "https://github.com/NebulaVoltage",
    demo: "VIEW PROJECT",
    featured: true,
    details: {
      problem: "Spacecraft mission control systems require deterministic, zero-dependency data structures for event logging, command queue sequencing, and instantaneous LIFO emergency abort rollback.",
      approach: "Designed a lightweight custom Java core framework implementing doubly-linked lists for command chronologies and stack structures for fault recovery checkpoints without relying on standard utility overhead.",
      technologies: "Java 17, Object-Oriented Architecture, Custom Stack/Queue Data Structures, JUnit Test Suite",
      keyConcepts: "LIFO Stacks, Doubly Linked Lists, Telemetry Validation, Deterministic Exception Handling",
      result: "Validated memory stability under rapid 10,000-command stream injection with microsecond-level rollback verification."
    }
  },
  {
    id: "sampling-aliasing-simulator",
    number: "03",
    title: "Sampling Theorem & Aliasing Simulator",
    categories: ["DSP", "ECE", "SOFTWARE"],
    primaryCategory: "DSP & Electronics",
    description: "An interactive signal-processing visualization tool demonstrating Nyquist-Shannon sampling principles, continuous-to-discrete conversion, frequency domain foldover, and aliasing behavior in real-time.",
    technologies: ["DSP", "Sampling Theorem", "Aliasing", "Signal Processing", "JavaScript", "Interactive Canvas"],
    github: "https://github.com/NebulaVoltage",
    demo: "VIEW PROJECT",
    featured: true,
    details: {
      problem: "Understanding continuous signal digitization and the mathematical phenomenon of aliasing when sampling below the Nyquist rate ($f_s < 2f_{max}$) often lacks intuitive interactive visual representations.",
      approach: "Engineered an interactive web simulator utilizing HTML5 Canvas and real-time trigonometric wave generation to dynamically plot continuous signals, adjustable sampling impulse trains, and reconstructed output waveforms.",
      technologies: "HTML5 Canvas, Vanilla JS AudioContext API, Fourier/Sinusoidal Synthesizer, Dynamic Math Expressions",
      keyConcepts: "Nyquist Rate, Shannon Sampling Theorem, Spectrum Folding, Discrete Fourier Concepts, Reconstruction Filters",
      result: "Provides immediate visual and audio feedback of frequency aliasing, illustrating distortion when $f_s$ falls below the critical threshold."
    }
  },
  {
    id: "arduino-embedded-systems-hub",
    number: "04",
    title: "Arduino & Embedded Systems Laboratory",
    categories: ["EMBEDDED", "ECE", "SOFTWARE"],
    primaryCategory: "Embedded & Hardware",
    description: "A comprehensive hardware-software integration suite exploring Arduino microcontroller programming, sensor data acquisition, analog-to-digital conversion, and serial communication protocols.",
    technologies: ["Arduino", "Embedded C/C++", "Sensors", "Analog Electronics", "ADC", "PWM", "Signal Processing"],
    github: "https://github.com/NebulaVoltage",
    demo: "VIEW PROJECT",
    featured: true,
    details: {
      problem: "Interfacing physical sensor signals (ultrasonic, temperature, IR) with microcontroller logic requires precise timing, noise filtering, and hardware interrupt management.",
      approach: "Developed low-level Embedded C driver routines for sensor readout, implemented software exponential moving average (EMA) filters for signal smoothing, and established UART serial monitoring protocols.",
      technologies: "Arduino IDE, Embedded C/C++, ATmega328P Microcontroller, I2C/SPI Protocols, Oscilloscope Validation",
      keyConcepts: "Hardware Interrupts, Analog-to-Digital Conversion (ADC), PWM Motor Control, Microcontroller Timers",
      result: "Successfully demonstrated low-noise real-time telemetry processing across multiple sensor channels."
    }
  }
];

export const FILTER_CATEGORIES = [
  "ALL",
  "SOFTWARE",
  "ECE",
  "EMBEDDED",
  "AI / ML",
  "DSP",
  "DSA"
];
