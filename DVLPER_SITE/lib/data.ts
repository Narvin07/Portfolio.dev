import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'sachaniyanarvin21@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Narvin, I am reaching out to you because...',
    oldPortfolio: 'https://portfolio-umber-phi-86.vercel.app/',
    resume: '/Narvin-resume.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/sachaniyanarvin' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/narvin-sachaniya/' },
    { name: 'Instagram', url: 'https://www.instagram.com/my_self__narwin_s_07/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Crm',
        slug: 'crm',
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://event-managment-eta.vercel.app/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>Blog Management: SEO-friendly blog with categorization and search</li>
        <li>Product Catalog: Organized product display with filtering capabilities</li>
        <li>Fully Responsive: Optimized for all device sizes</li>
        <li>Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>State Management: Implemented client-side data fetching and caching</li>
        <li>CMS Customization: Created admin interfaces for content editors</li>
        <li>Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Devom',
        slug: 'devom',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'ResumeHub',
        slug: 'resume_hub',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'BankingApp',
        slug: 'banking-app',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Itari',
        slug: 'itari',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'Codementor',
        slug: 'codementor',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: '# Role',
        company: '# CompanyName',
        duration: '# TimeDuration',
    },
];

export const CERTIFICATES = [
    {
        name: 'AWS AMAZON',
        image: '/certificates/AWS Amzon DocumentDB.jpg',
    },
    {
        name: 'AWS CONTAINER SEQURITY',
        image: '/certificates/AWS Container Security.jpg',
    },
    {
        name: 'AZURE FUNDAMENTALS',
        image: '/certificates/Azure Fundamentals.jpg',
    },
    {
        name: 'AZURE SERVICES',
        image: '/certificates/Azure Services.jpg',
    },
    {
        name: 'AZURE WEBINAR',
        image: '/certificates/Azure Webinar.jpg',
    },
    {
        name: 'INFOSAYS MINCROSERVICES',
        image: '/certificates/Infosays Microservices.jpg',
    },
    {
        name: 'GATEWAY LOAD BALANCER',
        image: '/certificates/Gateway Load Balancer.jpg',
    },
    {
        name: 'POWER BI FUNDAMENTALS',
        image: '/certificates/Microsoft PBIF,jpg'
    },
    {
        name: 'GITHUB COPILOT FUNDAMENNTALS',
        image: '/certificates/Microsoft Github Copilot.jpg',
    },
    {
        name: 'CSS',
        image: '/certificates/css.jpg',
    },
    {
        name: 'FRONTEND(REACT)',
        image: 'certificates/frontend_develper_react.jpg'
    },
    {
        name: 'JAVASCRIPT(BASIC)',
        image: '/certificates/javascript_basic.jpg',
    },
    {
        name: 'JAVASCRIPT(INTERMEDIATE)',
        image: '/certificates/javascript_intermediate.jpg',
    },
    {
        name: 'NODEJS(BASIC)',
        image: '/certificates/nodejs_basic.jpg',
    },
    {
        name: 'NODEJS(INTERMEDIATE)',
        image: '/certificates/nodejs_intermediate.jpg',
    },
    {
        name: 'PROBLEMSOLVING(BASIC CPP)',
        image: '/certificates/problem_solving_basic.jpg',
    },
    {
        name: 'PROBLEMSOLVING(INTERMEDIATE CPP)',
        image: '/certificates/problem_solving_intermediate.jpg',
    },
    {
        name: 'REACT',
        image: '/certificates/react_basic.jpg',   
    },
    {
        name: 'REST API(INTERMEDIATE)',
        image: '/certificates/rest_api_intermediate.jpg',
    },
];