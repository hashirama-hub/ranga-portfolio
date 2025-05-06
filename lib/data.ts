export const personalInfo = {
  name: "Ranga Rayapudi",
  title: "Full Stack Developer",
  email: "rangarayapudi89@gmail.com",
  location: "Dalls, TX",
  bio: "I build exceptional and accessible digital experiences for the Web and Mobile.",
  longBio:
    "I'm a full-stack developer specializing in building digital experiences using latest Tech Stack. Currently, I'm focused on building accessible, human-centered mobile Products using Gen AI api's. My passion lies in crafting intuitive user interfaces that solve real-world problems while maintaining clean, efficient code architecture.",
  availability:
    "Available to collaborate on building AI centered Mobile and Web applications using latest Tech Stack.",
  socialLinks: {
    github: "https://github.com/RRRASU",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com/in/ranga-rayapudi-6b1a42148/",
    instagram: "https://instagram.com",
  },
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const skills = [
  {
    name: "JavaScript",
    icon: "FileJs",
    category: "frontend",
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: "FileType",
    category: "frontend",
    color: "text-blue-400",
  },
  {
    name: "React",
    icon: "Atom",
    category: "frontend",
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: "SquareCode",
    category: "frontend",
    color: "text-slate-100",
  },
  {
    name: "Tailwind CSS",
    icon: "Paintbrush",
    category: "frontend",
    color: "text-sky-400",
  },
  {
    name: "Node.js",
    icon: "NodeJs",
    category: "backend",
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: "Server",
    category: "backend",
    color: "text-gray-400",
  },
  {
    name: "MongoDB",
    icon: "Database",
    category: "backend",
    color: "text-green-600",
  },
  {
    name: "PostgreSQL",
    icon: "Database",
    category: "backend",
    color: "text-blue-400",
  },
  {
    name: "GraphQL",
    icon: "Webhook",
    category: "backend",
    color: "text-pink-500",
  },
  {
    name: "Docker",
    icon: "Container",
    category: "devops",
    color: "text-blue-500",
  },
  {
    name: "AWS",
    icon: "Cloud",
    category: "devops",
    color: "text-orange-500",
  },
  {
    name: "Git",
    icon: "GitBranch",
    category: "tools",
    color: "text-orange-600",
  },
  {
    name: "Figma",
    icon: "Figma",
    category: "tools",
    color: "text-purple-400",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Api's",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing in Node.js.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/RRRASU/Node-E-Commerce.git",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "ShareNRide",
    description:
      "A Ridesharing app build to .",
    image:
      "https://img.freepik.com/free-vector/taxi-app-concept_23-2148496627.jpg?semt=ais_hybrid&w=740",
    tags: ["Angular", "PHP", "Bootstrap"],
    github: "https://github.com/RRRASU/shareNridecurd",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current conditions and forecasts for multiple locations.",
    image:
      "https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenWeatherAPI", "Redis"],
    github: "https://github.com/RRRASU/weatherApp",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 4,
    title: "Personal Expense Tracker",
    description:
      "An application for tracking personal expenses and managing budgets.",
    image:
      "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "PostgreSQL", "MongoDB", "Node", "Express",  "GraphQl"],
    github: "https://github.com/RRRASU/Expense-tracker-graphQl-node",
    demo: "https://demo.com",
    featured: true,
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Integrating AngulaJs with latest Angular versions",
    excerpt:
      "Learn how to integrate AngularJs1.x with the latest Angular 2-19 version for a smooth transition.",
    date: "2017-09-08",
    readTime: "5 min read",
    image:
      "https://media.licdn.com/dms/image/v2/C4D12AQEM3Za9n-pofQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520161271942?e=1752105600&v=beta&t=fqEGNr2sfJQtr7KfLVpy_mrzxoTAO9WkIGWopOx7g34",
    slug: "integrating-angularjs-angular",
    featured: true,
  },
  {
    id: 2,
    title: "Promises Vs Observables",
    excerpt:
      "Compare different state management approaches in React applications.",
    date: "2017-09-05",
    readTime: "7 min read",
    image:
      "https://www.syncfusion.com/blogs/wp-content/uploads/2019/11/Angular-Promises-Versus-Observables.png",
    slug: "https://www.linkedin.com/pulse/promises-vs-observables-ranga-rayapudi/",
    featured: false,
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox: When to Use Each",
    excerpt:
      "Understanding the differences between CSS Grid and Flexbox for layout design.",
    date: "2023-03-10",
    readTime: "6 min read",
    image:
      "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "css-grid-vs-flexbox",
    featured: false,
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt:
      "Practical techniques for improving performance in React applications.",
    date: "2025-05-06",
    readTime: "10 min read",
    image:
      "https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "https://www.linkedin.com/pulse/how-optimize-performance-react-practical-tips-ranga-rayapudi-5g59c/",
    featured: true,
  },
];

export const experiences = [
  {
    company: "JCPenney",
    position: "Senior Software Engineer",
    duration: "2023 - Present",
    description:
      "Lead the migration of legacy mainframe applications to latest technologies and integrating with upgraded hardware devices used in JCPenney Store. Improved performance by 40% reducing legacy systems footprint. Mentored junior developers and implemented best practices for the frontend team.",
  },
  {
    company: "TSYS",
    position: "Sr Software Engineer",
    duration: "2022 - 2023",
    description:
      "Designed and developed an innovative one stop application for all the TSYS employee to know about performance of their flagship api and products. Extensively involved in upgrading Techstack to Micro Front end architecture using Front End Technologies. Worked on integrating Azure AI apis to to create a Gen AI feature integrating with cloud DB's.",
  },
  {
    company: "Walmart",
    position: "Sr. Software Engineer",
    duration: "2020 - 2020",
    description:
      "Involved in developing Walmart's Global Sourcing and Procurement Platform. Deveoped in latest Angular and later migrated to React using Mirco Fornt End architecture, NodeJs and GraphQl.",
  },
  {
    company: "Southwest Airlines",
    position: "Sr UI Developer",
    duration: "2019 - 2020",
    description:
      "Designed and developed SWA customer MyAccout portal using React, Redux, and Node.js. Implemented responsive design principles to ensure a seamless experience across various devices and followed strict accesability standards. Enagaged in various Architectural review meetings to discuss the best practices and design patterns.",
  },
  {
    company: "Trinet Inc",
    position: "Software Developer",
    duration: "2017 - 2019",
    description:
      "Worked on developing an advanced HR reporting tool using Angular framework, Ag-grid, Kendo- UI, RXJS library and NGXS state management library. Leverged integrating Data visualization tools such as Tableau, like D3.js, Chart.js and Highcharts to create interactive charts and graphs.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jason Stauty",
    position: "Solution Architect at Southwest Airlines",
    content:
      "Ranga was very important to helping the team deliver projects. His ability to quickly come up to speed and provide great quality UI experiences helped us to continually meet and exceed our customers expectations. In addition to all of this he always came to work with a fun loving attitude and was a joy to work with.",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQGqD5MTvZlTFQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1517577240457?e=1752105600&v=beta&t=dVgov5Stra5lvkzn3OrMYYMGEzsMrT3R6J5Oz9pWzVU",
  },
  {
    id: 2,
    name: "Raghu",
    position: "Senior Engineer at Southwest Airlines",
    content:
      "An exceptional developer who understands both design and technical requirements well. A great combination!",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
