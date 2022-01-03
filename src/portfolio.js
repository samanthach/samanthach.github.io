/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Samantha Chu",
  title: "Hi, I'm Samantha Chu",
  subTitle: emoji(
    "Full-stack software engineer based in New York City. Currently developing"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-OlEgVTtDxV35sa8k9uKnP4gfYaFRwcm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/samanthach",
  linkedin: "https://www.linkedin.com/in/samantha-chu",
  gmail: "samantha.chu@gmail.com",
  medium: "https://medium.com/@samantha.chu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Hello!",
  subTitle: [
    "I'm a full-stack software engineer and UX designer with experience building dynamic web applications. I’m passionate about solving modern problems with technology, and really enjoy creating experiences that delight users. I love to talk about web accessibility, user-centric design methods, and cool CSS tricks.",
  ],
  skills: [
      // "I'm also a freelance UX Designer and would love to discuss opportunities to work together. If you have a project or idea in mind, please reach out to see if we could be a good fit!",
      "In my spare time, I like to do pilates/yoga, listen to audiobooks, and play with my dog, Brownie.",
      "If you'd like to chat or reach me, feel free to email me or send me a message on LinkedIn!",
      "Here are some of the tech I know:",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "sketch",
      fontAwesomeClassname: "fab fa-sketch"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/cornell-logo.png"),
      subHeader: "Master of Professional Studies in Information Science | Bachelor of Science in Information Science",
      duration: "September 2017 - December 2020",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "M.P.S. Concentration: Interactive Technologies",
        "B.S. Concentration: User Experience Design and Data Science",
        "Selected as part of the Early Admit MPS Program"
      ],
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end web development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer II",
      company: "Insider",
      companylogo: require("./assets/images/insider.jpeg"),
      date: "September 2020 – Present",
      desc: "New York, NY",
      descBullets: [
        "Built features in HTML/CSS/JS to improve user engagement and page views per session on the Business Insider and Insider news site.",
        "Practices writing scalable code components on both standard web pages and accelerated mobile pages.",
        "Works in a scrum agile environment."
      ]
    },
    {
      role: "Product Design Intern",
      company: "Markid",
      companylogo: require("./assets/images/markid-logo.jpeg"),
      date: "May 2020 - September 2020",
      desc: "New York, NY",
      descBullets: [
        "Engaged in information architecture planning, UX mapping, UI flow design, and creating user stories (JIRA).",
        "Communicated product needs and requirements to development and UX teams.",
        "Organized project phases using waterfall and agile methodologies."
      ]
    },
    {
      role: "Product Management Intern",
      company: "CardConnect",
      companylogo: require("./assets/images/cardconnect-logo.jpeg"),
      date: "May 2019 - August 2019",
      desc: "King of Prussia, PA",
      descBullets: [
        "Launched user tests and redesigned the attachments feature in the Copilot system UI.",
        "Worked closely with product and operation teams to identify interface bottlenecks in the Copilot on-boarding flow. ",
        "Developed an operation tools inventory and cross-analyzed the overlapping software between teams to create a findings analysis report"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some cool stuff I've worked on",
  projects: [
    {
      image: require("./assets/images/whattoeat.png"),
      projectName: "What to Eat: Ithaca's Farmers Market",
      role: "Engineer and Designer",
      projectDesc: "Developed a dynamic front-end application for the Ithaca's Farmer's Market, designed to influence users to try new food stalls. Utilized Vue UI component library.",
      footerLink: [
        {
          name: "View Project",
          url: "https://w2-eat.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/venmo-cover.png"),
      projectName: "Venmo: A Concept Supporting User Reminiscence",
      role: "UX Designer",
      projectDesc: "A UX Feature Case Study where my teammates and I explored the use of memory tools to elevate the social media aspect of Venmo.",
      footerLink: [
        {
          name: "View Design Brief",
          url: "https://medium.com/@samantha.chu/venmo-a-redesign-supporting-user-reminiscence-a4dcfccd88b0"
        }
      ]
    },
    {
      image: require("./assets/images/lychee.png"),
      projectName: "Lychee",
      role: "UX Designer",
      projectDesc: "Developing the User Interface for an application that connects non-English speaking International students to the cultural climate at Cornell.",
      footerLink: [
        {
          name: "View Design Brief",
          url: "https://medium.com/@samantha.chu/lychee-connecting-international-chinese-students-with-americans-through-language-a0e166dc5e0e"
        }
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog Posts",
  subtitle:
    "Check out my posts on Medium",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Want to say hi? Reach out to me via email!",
  number: "",
  email_address: "samantha.chu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
