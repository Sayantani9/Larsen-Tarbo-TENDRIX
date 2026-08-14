# TENDRIX: Bio-Inspired Tentacle Gripper Robotic Arm with ML-Based Emergency Safe Homing System

<p align="center">
  <img src="assets/banner.png" width="100%" alt="TENDRIX Banner"/>
</p>

<h1 align="center">TENDRIX</h1>

<h3 align="center">
Bio-Inspired Adaptive Robotic Arm for Safe Industrial Manipulation During Power Loss
</h3>

<p align="center">
L&T Techgium Hackathon Finalist • Industrial Robotics • Computer Vision • Machine Learning • Embedded Systems • Safety Engineering
</p>

<p align="center">
  <img src="https://img.shields.io/badge/L&T-Techgium%20Finalist-0A66C2?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Status-Prototype-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Platform-ESP32-important?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/CAD-SolidWorks-orange?style=for-the-badge"/>
</p>

---

# Project leadership

<p align="center">
  <img src="assets/sayantani-profile.jpg" width="220" alt="Sayantani Banerjee"/>
</p>

<h2 align="center">Sayantani Banerjee</h2>

<h4 align="center">Project Team Lead • Systems Integration Lead • AI & Robotics Researcher</h4>

<p align="center">
Founder of SHUDDH • Computer Vision • Embedded Systems • Sustainable Automation • Research & Innovation
</p>

<p align="center">
  <a href="https://github.com/Sayantani9"><img src="https://img.shields.io/badge/GitHub-Sayantani9-181717?style=for-the-badge&logo=github"/></a>
  <a href="https://www.linkedin.com/in/g-sayantani-mb-65337230b/"><img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin"/></a>
  <a href="mailto:smb.workspace9@gmail.com"><img src="https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail&logoColor=white"/></a>
</p>

---

# Executive summary

TENDRIX is a **bio-inspired cable-tendon robotic arm** designed for **safe adaptive industrial manipulation**. The system combines a **multi-segment tentacle gripper**, **computer vision**, **machine learning-assisted grasping**, and an **emergency power-loss safe homing system** that enables controlled object release and automatic return to a safe position during unexpected power failures.

Unlike conventional robotic manipulators that may abruptly stop or drop payloads during electrical failures, TENDRIX introduces a **supercapacitor-backed emergency landing control architecture** capable of executing a safe descent, controlled object release, and autonomous homing sequence.

The project focuses on **industrial safety, adaptive manipulation, modular robotics, and intelligent automation**.

---

# L&T Techgium recognition

This project was developed and presented as an **L&T Techgium Hackathon Finalist**, addressing a real industrial challenge in manufacturing automation:

> **How can robotic manipulators safely handle unexpected power outages while maintaining adaptive grasping capability for objects of varying geometry and fragility?**

---

# The industrial problem

In modern manufacturing environments, robotic manipulators perform continuous handling of:

* fragile components
* irregular industrial parts
* packaging materials
* precision assemblies
* glass products
* electronic modules

A sudden power outage can cause:

* uncontrolled arm stoppage
* payload dropping
* collision with nearby equipment
* production damage
* operator safety hazards
* recovery downtime

Traditional robotic systems often require complex recovery procedures and expensive safety hardware.

TENDRIX addresses this by integrating **mechanical adaptability with intelligent emergency control**.

---

# Key innovations

## Bio-inspired tentacle gripper

The end-effector is inspired by **octopus tentacle mechanics**, allowing the gripper to conform around objects rather than relying solely on rigid contact points.

### Advantages

* adaptive surface contact
* improved grip stability
* handling of irregular geometries
* reduced contact pressure
* safer fragile-object manipulation
* higher grasp tolerance

---

## Cable-tendon actuation

Instead of mounting heavy actuators near the gripper, TENDRIX uses a **cable-tendon transmission architecture**.

Benefits:

* reduced moving inertia
* faster dynamic response
* lower end-effector weight
* improved energy efficiency
* simplified maintenance
* modular actuation

---

## Emergency landing control system

The primary safety innovation of TENDRIX is its **power-loss emergency landing controller**.

When power failure is detected, the controller automatically:

1. detects voltage collapse
2. activates supercapacitor backup
3. stabilizes motor control
4. performs controlled arm deceleration
5. safely releases the object
6. executes homing trajectory
7. parks the arm in a predefined safe position

This prevents uncontrolled payload drops and mechanical damage.

---

# System architecture

<p align="center">
  <img src="assets/system-architecture.png" width="90%"/>
</p>

The complete control pipeline consists of:

Camera → Computer Vision → Object Classification → Grasp Planner → Motion Controller → Cable-Tendon Arm → Bio-Tentacle Gripper

Parallel safety pipeline:

Power Monitor → Emergency Controller → Backup Power → Safe Release → Homing System

---

# Mechanical design

## Robotic arm

The arm consists of:

* rotating base
* shoulder joint
* elbow joint
* wrist joint
* tendon routing mechanism
* modular end-effector mount

### Actuation

* base-mounted servo motors
* belt-drive transmission
* cable-tendon routing
* lightweight aluminum links
* modular joint assemblies

---

## Tentacle gripper

<p align="center">
  <img src="assets/cad-render.png" width="90%"/>
</p>

The gripper consists of multiple articulated segments connected through tendon-driven flexure joints.

### Features

* compliant grasping
* adaptive wrapping
* variable stiffness behavior
* micro-claw assistance
* multi-point contact
* modular segment replacement

---

# Machine learning pipeline

## Computer vision

The vision system performs:

* object detection
* object classification
* pose estimation
* grasp point prediction
* trajectory initialization

## ML model

Input:

* RGB image
* object contour
* bounding geometry
* estimated weight category

Output:

* gripper orientation
* tendon tension profile
* approach trajectory
* grasp confidence

---

# Emergency homing algorithm

The emergency controller continuously monitors supply voltage.

## Detection logic

If

V_supply < threshold

then

Emergency mode = TRUE

## Emergency sequence

1. freeze incoming commands
2. switch to backup power
3. compute shortest safe trajectory
4. reduce joint velocity
5. maintain grip stability
6. move to release zone
7. release payload
8. return to home
9. disable high-power actuators

---

# Hardware stack

## Embedded control

* ESP32
* PWM motor control
* encoder feedback
* voltage monitoring
* current sensing
* emergency interrupt system

## Actuation

* servo motors
* cable-tendon transmission
* belt drive
* pulley routing system

## Power system

* primary DC supply
* supercapacitor backup
* DC-DC regulation
* emergency power switching

## Sensors

* camera module
* limit switches
* joint encoders
* current sensors
* voltage sensors

---

# Software stack

| Layer            | Technology        |
| ---------------- | ----------------- |
| Embedded         | ESP32             |
| Firmware         | C++               |
| Computer Vision  | OpenCV            |
| Machine Learning | TensorFlow        |
| CAD              | SolidWorks        |
| Simulation       | PyBullet / Gazebo |
| Version Control  | Git & GitHub      |

---

# Repository structure

TENDRIX-Bio-Tentacle-Gripper-Robotic-Arm/

├── docs/

├── hardware/

├── firmware/

├── software/

├── simulations/

├── experiments/

├── results/

├── presentations/

├── assets/

└── README.md

---

# Experimental validation

## Adaptive grasp testing

Objects tested:

* plastic bottles
* cardboard boxes
* metal cylinders
* glass containers
* irregular tools
* soft packaging

Metrics:

* grasp success rate
* grip stability
* object deformation
* release accuracy

---

## Power failure testing

Scenarios:

* instantaneous power loss
* gradual voltage collapse
* repeated interruptions
* emergency release
* homing repeatability

Measured:

* response time
* homing accuracy
* energy consumption
* successful recovery percentage

---

# Safety features

* emergency power backup
* controlled descent
* collision-aware homing
* voltage monitoring
* current limiting
* actuator protection
* modular fail-safe architecture
* operator-safe release behavior

---

# Research contributions

This project explores the intersection of:

* bio-inspired robotics
* adaptive manipulation
* industrial safety systems
* cable-driven robotics
* machine learning-assisted grasping
* embedded emergency control
* modular robotic architecture

---

# Future roadmap

## Phase 2

* force feedback sensing
* tendon tension estimation
* soft robotic fingertips
* reinforcement learning grasp optimization

## Phase 3

* ROS2 integration
* digital twin
* predictive maintenance
* cloud-based diagnostics
* industrial PLC compatibility

## Phase 4

* autonomous warehouse manipulation
* collaborative robot deployment
* multi-arm coordination
* adaptive manufacturing integration

---

# Project significance

TENDRIX demonstrates that **industrial robotic systems can be designed with biological adaptability and intelligent safety mechanisms simultaneously**.

The combination of **adaptive cable-driven manipulation** and **autonomous emergency recovery** creates a practical framework for safer robotic deployment in manufacturing environments.

---

# Team

## Project Team Lead

**Sayantani Banerjee**

Systems Integration

AI & Computer Vision

Robotics Architecture

Technical Documentation

Research & Project Management

---

# Contact

**Sayantani Banerjee**

GitHub: https://github.com/Sayantani9

LinkedIn: https://www.linkedin.com/in/g-sayantani-mb-65337230b/

Email: [smb.workspace9@gmail.com](mailto:smb.workspace9@gmail.com)

---

<p align="center">
<b>L&T Techgium Hackathon Finalist</b><br/>
Building the next generation of adaptive, intelligent, and safety-centric robotic systems.
</p>
