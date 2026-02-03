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
    "Skilled Python Developer 🚀 & DevSecOps enthusiast ♾ with experience in microservices, CI/CD pipelines, and cloud deployments. I aim to use my skills in backend development, containerization, and monitoring to contribute to innovative projects and help ensure secure and efficient application performance."
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
  instagram: "https://www.instagram.com/atit_at_it/",
  twitter: "https://twitter.com/atit_tweets",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Python Developer & DevSecOps enthusiast specializing in backend development, microservices architecture, CI/CD automation, and cloud infrastructure management.",
  skills: [
    emoji(
      "⚡ Develop secure and scalable backends, REST APIs, and microservices with seamless integration capabilities."
    ),
    emoji(
      "⚡ Build and maintain CI/CD pipelines using Docker, Jenkins, GitLab, and Argo CD for continuous delivery."
    ),
    emoji(
      "⚡ Implement monitoring solutions with Grafana, Prometheus, and Netdata for performance optimization."
    ),
    emoji(
      "⚡ Apply security best practices including OWASP Top 10, vulnerability assessments, and code quality assurance."
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
      Stack: "Software Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps",
      progressPercentage: "40%"
    },
    {
      Stack: "Security, Networking",
      progressPercentage: "25%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founding Engineer",
      company: "Ally Solutions",
      companylogo: require("./assets/images/Ally Logo.png"),
      date: "January 2025 – Present",
      desc: "Building AI-powered voice and chat applications with Python and Next.js.",
      descBullets: [
        "Integrated Azure Communication Services and Amazon Connect for real-time voice and chat features.",
        "Connected AI agents with CRM systems, booking platforms, and ticketing systems.",
        "Managing cloud infrastructure and deployments on Azure."
      ]
    },
    {
      role: "LLM Trainer (Contract)",
      company: "Turing",
      companylogo: require("./assets/images/turing logo.avif"),
      date: "September 2025 – November 2025",
      desc: "Created competitive programming problems to evaluate LLM reasoning and solution validity.",
      descBullets: [
        "Assessed LLM outputs for valid brute-force solutions while failing optimal approaches.",
        "Submitted structured evaluations via Google Colab with problem analysis and response comparison.",
        "Evaluated LLM responses from GitHub issues and PRs on algorithm optimization and security."
      ]
    },
    {
      role: "Software Engineer",
      company: "Code Himalaya",
      companylogo: require("./assets/images/Code-Himalaya logo.png"),
      date: "December 2024 – March 2025",
      desc: "API development for TrustAML, an AML/CFT solution for banks and financial institutions.",
      descBullets: [
        "Deployed JavaScript and Python applications on bank infrastructure.",
        "Resolved vulnerabilities identified during VAPT, strengthening application security.",
        "Mentored junior developers and conducted code reviews."
      ]
    },
    {
      role: "Python Developer, DevOps Engineer",
      company: "Vidhypro",
      companylogo: require("./assets/images/vidhy pro.jpg"),
      date: "September 2022 – December 2024",
      desc: "Architected JWT-based RBAC system for multi-tenant ERP solution using Django.",
      descBullets: [
        "Managed VPC/VPS services hosting Python and JavaScript applications.",
        "Built CI/CD pipelines using Docker, Nginx, Apache, Jenkins, and Git.",
        "Implemented OWASP security standards, reducing security breaches by 50%.",
        "Integrated Grafana, cAdvisor, and Prometheus for real-time monitoring."
      ]
    },
    {
      role: "Django & Flask Developer (Contract)",
      company: "Supercomm IT",
      companylogo: require("./assets/images/upwork.png"),
      date: "January 2023 – May 2023",
      desc: "Migrated codebase from Flask to Django, enhancing scalability and performance.",
      descBullets: [
        "Resolved race conditions with security and database teams.",
        "Implemented third-party API integrations to extend functionality."
      ]
    },
    {
      role: "Remote Backend Developer (Contract)",
      company: "Tech Himalayan",
      companylogo: require("./assets/images/techhimalaya.png"),
      date: "2022 – January 2023",
      desc: "Created RESTful APIs for an all-in-one sports application.",
      descBullets: [
        "Designed databases optimized for the business model.",
        "Managed CI/CD pipelines for seamless software delivery.",
        "Developed test cases and assisted React & Flutter integrations."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Fiverr & Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "2021 – 2024",
      desc: "Developed AI-powered HRMS and CRM systems with custom web applications."
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
  subtitle: "PERSONAL SAAS APPLICATIONS AND COMPANIES I'VE HELPED BUILD",
  projects: [
    {
      image: require("./assets/images/ally dashboard.png"),
      projectName: "Ally Solutions Dashboard",
      projectDesc: "Voice and chat analytics dashboard for AI-powered customer interactions",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://allysolutions.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/creator crush dashboard.png"),
      projectName: "CreatorCrush Founder",
      projectDesc: "Tinder like Platform for connecting creators and brands",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://creatorcrush.digital/"
        }
      ]
    },
    {
      image: require("./assets/images/tastymonials dashboard.png"),
      projectName: "TastyMonials Founder",
      projectDesc: "Testimonial collection and management platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tastymonials.digital/"
        }
      ]
    },
    {
      image: require("./assets/images/providhy.png"),
      projectName: "Providhy ERP",
      projectDesc: "Business Management SAAS",
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
          url: "https://dblegalcrm.azurewebsites.net/"
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
          url: "https://mvp.microsoft.com/studentambassadors/certificate/1b878bdd-93df-463e-92b4-558496f308eb"
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
      title: "API Security Fundamentals by APIsec University",
      subtitle: "API Security and Risk Mitigation",
      image: require("./assets/images/aip_sec.png"),
      imageAlt: "APISec Fundamentals",
      footerLink: [
        {
          name: "view certificate",
          url: "https://www.credly.com/badges/8867e327-420c-4bd7-be5e-44c7b5a4ff1a/public_url"
        }
      ]
    },
    {
      title: "API Gateway Security Best Practices",
      subtitle: "Role and best practices of API Gateways in API security",
      image: require("./assets/images/gateway_best_pracitces.png"),
      imageAlt: "API Gateway best practices",
      footerLink: [
        {
          name: "view certificate",
          url: "https://www.credly.com/badges/ef560bd9-5c9d-4996-ad0b-3708c0ca1f02/public_url"
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
      image: require("./assets/images/Python Beyond Basics_page.jpg"),
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
      subtitle: "Completed Certifcation from Programiz for mastering Python3",
      image: require("./assets/images/Become a Python Master.jpg"),
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

    "https://open.spotify.com/embed/episode/552E9TiZVFgJysG8mt207A?utm_source=generator"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
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
  display: false // Set true to display this section, defaults to false
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
  isHireable,
  resumeSection
};
