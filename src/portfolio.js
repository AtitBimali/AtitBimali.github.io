/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Atit Bimali",
  title: "Hi all, I'm Atit",
  subTitle: emoji(
    "Passionate Python Developer 🚀 & DevSecOps enthusiast ♾ with extensive experience building robust web applications and APIs using Django & Django Rest Framework. Proficient in CI/CD pipelines, containerization, web servers, MySQL, and cloud platforms such as AWS and Azure."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DV-bhL0wNNMPG9pGWoEooxl3qFMxfHKa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AtitBimali",
  linkedin: "https://www.linkedin.com/in/atit-b-b237b4179/",
  gmail: "atitbimali10@gmail.com",
  facebook: "https://www.facebook.com/atit.bimali",
  medium: "https://medium.com/@atitbimali10",
  stackoverflow: "https://stackoverflow.com/users/17767517/atit-bimali",
  instagram: "https://www.instagram.com/atitbimali/",
  twitter: "https://twitter.com/atit_tweets",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I am a Python developer with DevSecOps knowledge. I work on backend, microservices, APIs, and bring those applications to life.",
  skills: [
    emoji(
      "⚡ Develop secure and scalable backends, APIs, and seamlessly integrate with frontend and other microservices."
    ),
    emoji(
      "⚡ Create robust CI/CD pipelines for efficient version control and continuous delivery of services."
    ),
    emoji(
      "⚡ Proficiently manage and monitor bare metal infrastructure and cloud servers."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "apache2",
      fontAwesomeClassname: "fas fa-feather"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tribhuvan University",
      logo: require("./assets/images/new_summit_logo.jpg"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "March 2021 - April 2025",
      desc: "New Summit College, Shantinagar, Kathmandu"
    },
    {
      schoolName: "Arniko College",
      logo: require("./assets/images/arniko.jpg"),
      subHeader: "+2 Science",
      duration: "August 2018 - December 2020",
      desc: "Biratnagar, Morang"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Django, Rest Framework", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "40%"
    },
    {
      Stack: "Security, Networking",
      progressPercentage: "20%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Developer & Deployment Engineer",
      company: "Spices Research",
      companylogo: require("./assets/images/spices.jpg"),
      date: "September 2022 - PRESENT",
      desc: "Develop, Deploy and Maintain Mircoservices.",
      descBullets: [
        "Handle end-to-end development and operations of Python and Node.js applications.",
        "Implement CI/CD pipelines, manage MySQL servers, and orchestrate containerization on bare metal infrastructure.",
        "Regular collaboration with industry experts to optimize development and production processes."
      ]
    },
    {
      role: "Freelance Python Developer",
      company: "Tech Himalaya",
      companylogo: require("./assets/images/techhimalaya.png"),
      date: "2022 – January 2023",
      desc: "API development using Django Rest Framework",
      descBullets: [
        "Git hooks integration",
        "React and Flutter app integration",
        "Docker Compose and AWS deployment",
        "API test case writing"
      ]
    },
    {
      role: "Web Developer",
      company: "Fiverr, Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "June 2020 – 2023",
      desc: "Customized, scalable and secure web application design and development."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Providhy ERP",
      projectDesc: "Business Management System Saas powered by Django",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://providhy.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/DBLegal.png"),
      projectName: "DBLegal CRM",
      projectDesc: "Customer Relationship Management System",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://dblegal.azurewebsites.net/"
        }
      ]
    },
    {
      image: require("./assets/images/nepal_sports.png"),
      projectName: "Nepal Sports",
      projectDesc: "All about sports ⚽🏏",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nepalsportz.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications & Award Letters",

  achievementsCards: [
    {
      title: "Microsoft Student Ambassador",
      subtitle: "For completion of Microsoft Learn AI Skills Challenge.",
      image: require("./assets/images/microsoft_student_ambassador.jpg"),
      imageAlt: "Python Basics HackerRank Atit",
      footerLink: [
        {
          name: "view certificate",
          url: "https://drive.google.com/file/d/1_0SWgj9gN1Ad6fMl2fcLG2dJ3P1ph8bv/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS awsome day",
      subtitle: "Awarded for attending the AWS aswome day online conference",
      image: require("./assets/images/aws_awsome.png"),
      imageAlt: "Python Basics HackerRank Atit",
      footerLink: [
        {
          name: "view certificate",
          url: "https://drive.google.com/file/d/1_0SWgj9gN1Ad6fMl2fcLG2dJ3P1ph8bv/view?usp=sharing"
        }
      ]
    },
    {
      title: "MS AZ-400 ",
      subtitle: "Manage infrastructure as code using Azure and DSC",
      image: require("./assets/images/ms.png"),
      imageAlt: "ms Az-400",
      footerLink: [
        {
          name: "view achievement",
          url: "https://learn.microsoft.com/en-us/users/atitbimali-1360/"
        }
      ]
    },
    {
      title: "HackerRank Python Basics",
      subtitle: "Certification for completion of problem solving using Python",
      image: require("./assets/images/HackerRank_PythonBasic.png"),
      imageAlt: "Python Basics HackerRank Atit",
      footerLink: [
        {
          name: "view certificate",
          url: "https://drive.google.com/file/d/1NEACqvAM6N1xJinbYLXi6rrBzAJ8uHIX/view?usp=sharing"
        }
      ]
    },
    {
      title: "Python Beyond Basics",
      subtitle:
        "Certification for completion of python advance concepts like OOP",
      image: require("./assets/images/Python Beyond Basics_page-0001.jpg"),
      imageAlt: "Python beyond basics atit",
      footerLink: [
        {
          name: "view certificate",
          url: "https://drive.google.com/file/d/1gVJCOYq5JbQ3GVoMYiDcOJaDgcCEzTtY/view?usp=sharing"
        }
      ]
    },

    {
      title: "Python Master",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/Become a Python Master_page-0001.jpg"),
      imageAlt: "python master atit",
      footerLink: [
        {
          name: "view certificate",
          url: "https://drive.google.com/file/d/1cVMYbcWuPF6ueIjxhc8c-WihDmS7j6SJ/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Let's Connect",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Contributing to OSS",
      subtitle: "Let's connect",
      slides_url: "https://github.com/AtitBimali",
      event_url: "https://www.linkedin.com/in/atit-b-b237b4179/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE LISTENING TO PODCASTS, HERE'S SOME OF MY FAVOURITE ONES",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/show/2q5GOLTmNGpHYmrrZ0Ik73?utm_source=generator&theme=0",

    "https://open.spotify.com/embed/show/7bVFJvj8A2ZuYVs5lS992b?utm_source=generator"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+9779824393773",
  email_address: "atitbimali10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "atit_tweets", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
