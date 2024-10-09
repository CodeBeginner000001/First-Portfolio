# First-Portfolio Project
<p align="center">
  <img width="1440" alt="Screenshot 2024-10-10 at 3 38 32 AM" src="https://github.com/user-attachments/assets/2267bbe2-a262-41e9-83b2-0bdb1dbbe55a">
</p>

This portfolio showcases my first-ever project, demonstrating 3D visuals, user interfaces, and web development skills. It is built using **React** with **Vite**, featuring dynamic animations and 3D rendering without any CRUD (Create, Read, Update, Delete) operations. All the data for the portfolio is maintained through JavaScript files instead of a backend.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Project Details](#project-details)
- [Final View](#final-view)
- [How It Works](#how-it-works)
- [Learning Resources](#learning-resources)

## Introduction

This portfolio is a personal project designed to showcase my development skills in **React**, **Three.js**, **Tailwind CSS**, and **Framer Motion**. It highlights my work through interactive 3D models and animations, making the user experience engaging and visually appealing.

### Key Points:
- **No backend or database**: No CRUD operations are involved; the project is entirely frontend-based.
- **Data Handling**: All data, such as project details, experiences, and skills, is stored in JavaScript files within the project, avoiding any API calls or dynamic data fetching.
- **First Portfolio**: This is my first portfolio project, designed to demonstrate my skills and growth as a developer.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeBeginner000001/First-Portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Install **Tailwind CSS** and its dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

4. Initialize Tailwind CSS:
   ```bash
   npx tailwindcss init
   ```

5. Run the project:
   ```bash
   npm run dev
   ```

## Features

- **3D Model Integration**: Implemented using **Three.js** and **@react-three/fiber** to render interactive 3D elements.
- **Animation**: Added smooth animations using **Framer Motion** for enhanced visual effects.
- **Responsive Design**: Built using **Tailwind CSS** to ensure a consistent experience across devices.
- **Email Integration**: A contact form powered by **EmailJS** enables users to send messages directly from the portfolio.

## Technologies Used

- **Vite**: For fast and efficient project setup and development.
- **React**: To build reusable components and manage the frontend structure.
- **Tailwind CSS**: For utility-first CSS and responsive design.
- **Three.js & @react-three/fiber**: For 3D model rendering and manipulation.
- **Framer Motion**: For smooth animations throughout the website.
- **React Router DOM**: For page navigation and routing.
- **EmailJS**: For implementing email functionality directly from the frontend.
- **React Vertical Timeline Component**: To create a visually appealing timeline for experiences.

## File Structure

```
📦portfolio
 ┣ 📂public
 ┃ ┣ 📂desktop_pc
 ┃ ┗ 📂planet
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂About_Logos
 ┃ ┃ ┣ 📂Company_Logos
 ┃ ┃ ┣ 📂Feedback_Logos
 ┃ ┃ ┣ 📂Logos
 ┃ ┃ ┣ 📂Navbar_Logo
 ┃ ┃ ┣ 📂Project_Logos
 ┃ ┃ ┗ 📂Tech_Logos
 ┃ ┃ ┣ 📜herobg.png
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜linkedin.png
 ┃ ┃ ┗ 📜logo.jpg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂About-Components
 ┃ ┃ ┣ 📂canvas
 ┃ ┃ ┣ 📂Hero-Component
 ┃ ┃ ┗ 📂Navbar-Components
 ┃ ┃ ┣ 📜About.jsx
 ┃ ┃ ┣ 📜Contact.jsx
 ┃ ┃ ┣ 📜Experience.jsx
 ┃ ┃ ┣ 📜Feedbacks.jsx
 ┃ ┃ ┣ 📜Hero.jsx
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜Loader.jsx
 ┃ ┃ ┣ 📜Navbar.jsx
 ┃ ┃ ┣ 📜StarCanvas.jsx
 ┃ ┃ ┣ 📜Tech.jsx
 ┃ ┃ ┗ 📜Works.jsx
 ┃ ┣ 📂hoc
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜SectionWrapper.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜motion.js
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┣ 📜main.jsx
 ┃ ┗ 📜style.js
 ┗ 📜.env
```

### Data Handling

All the data in this project is managed through JavaScript files. Information such as projects, experiences, and skills are stored in these files, allowing easy updates and modifications without the need for a backend or database.

## Project Details

- **3D Models**: Implemented using **@react-three/drei** and **useGLTF** for loading GLTF models, displayed inside the **Canvas** tag from **@react-three/fiber**. Adjustments for scale, position, and rotation are made using arrays.
- **Animations**: Used **Framer Motion** for adding dynamic animations to key sections of the portfolio. Hover effects on cards are managed using **react-tilt**.
- **Timeline**: Created using **react-vertical-timeline-component** for showcasing a chronological view of my professional and educational journey.
- **Email Functionality**: Users can send messages directly from the portfolio using the **EmailJS** integration, with configuration stored in the **.env** file.

## Final View
<p align="center">
  <img width="1419" alt="Screenshot 2024-10-10 at 3 42 59 AM" src="https://github.com/user-attachments/assets/3ba6ac4c-9c22-400a-9acc-288b41f6f09d">
  <hr>
  <img width="1440" alt="Screenshot 2024-10-10 at 3 43 21 AM" src="https://github.com/user-attachments/assets/d7c373dc-9d55-4e44-b8b5-e7fbd4a188e1">
  <hr>
  <img width="1440" alt="Screenshot 2024-10-10 at 3 43 32 AM" src="https://github.com/user-attachments/assets/aa5277dd-7715-41c1-b23e-ffcc6ccbe050">
  <hr>
  <img width="1435" alt="Screenshot 2024-10-10 at 3 43 49 AM" src="https://github.com/user-attachments/assets/f1dfdc49-c1ad-49ba-be65-68ca116c3f58">
  <hr>
  <img width="1440" alt="Screenshot 2024-10-10 at 3 44 03 AM" src="https://github.com/user-attachments/assets/5030413e-95e7-4281-ba17-0b58a2291a8c">
  <hr>
  <img width="1439" alt="Screenshot 2024-10-10 at 3 44 19 AM" src="https://github.com/user-attachments/assets/bb5c1f18-ee7b-42fd-8bcb-bcc4e5294b9e">
</p>

## How It Works

- **3D Model Loading**: Models are rendered on the page using **useGLTF** and placed inside the **Canvas** component from **@react-three/fiber**. The **OrbitControls** component enables rotation and movement around the models.
- **Animations**: Smooth animations are integrated into various components using **Framer Motion**.
- **No CRUD Operations**: All the data is static, meaning there is no dynamic backend interaction or database involved. Data such as project descriptions, skill sets, and experience timelines are stored in local JavaScript files.

## Learning Resources

Here are some excellent resources where you can learn the technologies used in this portfolio:

### React
- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React Crash Course on YouTube](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

### Three.js & @react-three/fiber
- [Three.js Official Documentation](https://threejs.org/docs/)
- [@react-three/fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Three.js Crash Course on YouTube](https://www.youtube.com/watch?v=YK1Sw_hnm58)

### Tailwind CSS
- [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Crash Course on YouTube](https://www.youtube.com/watch?v=dFgzHOX84xQ)

### Framer Motion
- [Framer Motion Official Documentation](https://www.framer.com/motion/)
- [Framer Motion Crash Course on YouTube](https://www.youtube.com/watch?v=VPoUgdVM40c)

### EmailJS
- [EmailJS Official Documentation](https://www.emailjs.com/docs/)
- [Send Emails with EmailJS Tutorial on YouTube](https://www.youtube.com/watch?v=qj9yUpJ-Qqo)

By exploring these resources, you can gain a deeper understanding of how each technology is applied in this portfolio and extend your knowledge for future projects.
