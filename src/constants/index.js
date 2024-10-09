import {
  // About logos
    hardware,
    pcb,
    arduino,
    backend,
    cpp,
    web,
    // company logos
    hnhcart,
    ieeemsit,
    // Tech logo
    javascript,
    html,
    arduinoide,
    bootstrap,
    css,
    reactjs,
    cpplus,
    redux,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    git,
    // Project logo
    cryptoverse,
    fitnessclub,
    nodejsblog,
    pokemonslider,
    simonsays,
    textutils,
    virtualr,
    weatherapp,

    // Testimonals 
    priyanka,
    rishikesh,
    sudesh,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++/C",
      icon: cpp,
    },
    {
      title: "PCB Designer",
      icon: pcb,
    },
    {
      title: "Arduino Enthusiast",
      icon: arduino,
    },
    {
      title: "Hardware Developer",
      icon: hardware,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git/Github",
      icon: git,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "C/C++",
      icon: cpplus,
    },
    {
      name: "Arduino",
      icon: arduinoide,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Technician",
      company_name: "HatchnHack Cart",
      icon: hnhcart,
      iconBg: "#E6DEDD",
      date: "April 2021 - June 2023",
      points: [
        "Developed and assembled DIY kits for the company, enhancing product offerings.",
        "Managed content creation for social media platforms, driving engagement and outreach.",
        "Designed, tested, and debugged electronic components, and created Bills of Materials (BOM) for both power and low-voltage components.",
      ],
    },
    {
      title: "Project Development Intern",
      company_name: "HatchnHack Cart",
      icon: hnhcart,
      iconBg: "#E6DEDD",
      date: "June 2023 - August 2023",
      points: [
        "Designed a Custom Variable Power Supply – Engineered and developed a versatile power supply for various electronic applications, allowing for adjustable voltage output.",
        "Built a Secure Solenoid Door Lock System – Developed an access control system using an EM-18 RFID reader and a keypad, providing dual authentication for enhanced security.",
        "Created a Maze-Solving Robot – Designed and programmed a robot capable of autonomously navigating and solving complex mazes using sensors and pathfinding algorithms.",
      ],
    },
    {
      title: "Hardware Lead",
      company_name: "IEEE MSIT",
      icon: ieeemsit,
      iconBg: "#E6DEDD",
      date: "March 2023 - March 2024",
      points: [
        "Conducted multiple webinars to share knowledge on electronics and project development, fostering learning and engagement among students.",
        "Mentored four teams on distinct projects simultaneously, providing strategic direction and support throughout the project lifecycle.",
        "Oversaw the successful completion and presentation of projects in college, showcasing student work and reinforcing practical skills.",
        "Provided one-on-one mentorship sessions, assisting students in navigating the project development process and enhancing their technical proficiency.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He had been a key contributor to our success, consistently demonstrating exceptional technical expertise in electronics, solving complex challenges, and enhancing our product offerings with his innovative solutions and teamwork.",
      name: "Rishikesh Ranjan",
      designation: "Founder",
      company: "ElecTrade",
      image: rishikesh,
    },
    {
      testimonial:
        "He is hard working, vibrant and intelligent student and a good learner who is keen to learn new skills always",
      name: "Dr. Sudesh Pahal",
      designation: "Associate professor",
      company: "MSIT",
      image: sudesh,
    },
    {
      testimonial:
        "I highly recommend him for his exceptional dedication, creativity, critical thinking, strong work ethic, and passion for learning, making him an excellent candidate for any academic or professional opportunity.",
      name: "Dr. Priyanka Nandal",
      designation: "Associate Professor",
      company: "MSIT",
      image: priyanka,
    },
  ];
  
  const projects = [
    {
      name: "Cryptoverse",
      description:
        "Cryptoverse is built with React.js and utilizes the Ant Design framework to create a responsive and user-friendly interface. The project integrates with external APIs, such as CoinRanking and Cryptocurrency News via RapidAPI, to fetch real-time data on cryptocurrencies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Chart.js",
          color: "green-text-gradient",
        },
        {
          name: "AntDesign",
          color: "pink-text-gradient",
        },
        {
          name: "Rapidapi",
          color: "orange-text-gradient",
        },
      ],
      image: cryptoverse,
      source_code_link: "https://github.com/CodeBeginner000001/Cryptoverse",
      link: "https://cryptoverse-for-cryptocurrencies.netlify.app/",
    },
    {
      name: "Fitness Club",
      description:
        "The Fitness Club Website is a comprehensive platform designed to help users find and learn about various exercises. Users can search for exercises based on body parts, equipment, and target muscles. Additionally, users can select from exercise cards displayed below the search bar to get detailed information about each exercise, including how to perform it, its name, related YouTube videos, and similar exercises.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: fitnessclub,
      source_code_link: "https://github.com/CodeBeginner000001/Fitness_Club",
      link: "https://fitnessclub-yourexercise-gurukul.netlify.app/",
    },
    {
      name: "NodeJs Blog",
      description:
        "The NodeJs Blog platform is designed for simplicity and ease of use. It's perfect for anyone looking to set up a quick and efficient blog. The backend is built with Node.js and Express, with MongoDB handling data storage. EJS is used as the templating engine to render dynamic content on the frontend.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Ejs",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
      ],
      image: nodejsblog,
      source_code_link: "https://github.com/CodeBeginner000001/NodeJs_Blog",
      link: "https://nodejs-blog-4xqp.onrender.com/",
    },
    {
      name: "VirtualR",
      description:
      "VirtualR is built to deliver a seamless and intuitive user experience by combining video content with a responsive design. Whether accessed on mobile devices or large screens, the application ensures a consistent and visually appealing presentation. The use of TailwindCSS and React allows for efficient styling and powerful component-based architecture, making the project both scalable and maintainable. React Vite enhances this setup with fast development and optimized builds.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "LucideReact",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "pink-text-gradient",
        },
      ],
      image: virtualr,
      source_code_link: "https://github.com/CodeBeginner000001/VirtualR",
      link: "https://virtualr-vrapp.netlify.app/",
    },
    {
      name: "TextUtils",
      description:
      "TextUtils is a React application that allows users to manipulate text in various ways. It provides functionality to convert text to uppercase and lowercase, copy text to the clipboard, remove extra spaces, preview the text, and switch between light and dark modes. The app also includes navigation between Home and About pages.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: textutils,
      source_code_link: "https://github.com/CodeBeginner000001/TextUtils",
      link: "https://textutils-edit-text.netlify.app/",
    },
    {
      name: "Pokemon Slider",
      description:
      "The Pokémon Slider Website is a web application that allows users to view and interact with a slider showcasing various Pokémon. Built using HTML, CSS, and JavaScript, this website is designed to provide a visually appealing and interactive experience for Pokémon enthusiasts.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pokemonslider,
      source_code_link: "https://github.com/CodeBeginner000001/Pokemon-Slider",
      link: "https://codebeginner000001.github.io/Pokemon-Slider/",
    },
    {
      name: "Simon Says Game",
      description:
      "The Simon Says Game challenges players to remember and repeat sequences of colors and sounds. This version of the game is implemented using HTML,CSS & Javascript, providing a fun and interactive way to test your memory skills.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: simonsays,
      source_code_link: "https://github.com/CodeBeginner000001/Simon-Says-Game",
      link: "https://codebeginner000001.github.io/Simon-Says-Game/",
    },
    {
      name: "Weather App",
      description:
      "Weather App is a React application that allows users to get detailed weather information for their location. Users can enter their location to retrieve data such as temperature, humidity, max temperature, min temperature, feels-like temperature, weather conditions, wind speed, pressure, latitude, longitude, and an image depicting the current weather.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "Weatherapi",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/CodeBeginner000001/Weather-App",
      link: "https://weather-checkweather-today.netlify.app/"
    },
  ];

  const aboutPara = {
    about:"I'm a skilled software developer with experience in Javascript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solution that solve real world problems.Let's work together to bring your ideas to life!"
  }
  
  export { services, technologies, experiences, testimonials, projects,aboutPara };