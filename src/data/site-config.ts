export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    // logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    // image?: Image;
    // headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    // hero?: Hero;
    // subscribe?: Subscribe;
    // postsPerPage?: number;
    // projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: '',
    // subtitle: `Full-stack software engineer based in New York City. Currently building products at Business Insider.`,
    description: '',
    // image: {
    //     src: '/dante-preview.jpg',
    //     alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    // headerNavLinks: [
    //     {
    //         text: 'Home',
    //         href: '/'
    //     },
    //     {
    //         text: 'About',
    //         href: '/about'
    //     },
    //     {
    //         text: 'Projects',
    //         href: '/projects'
    //     },
    //     {
    //         text: 'Blog',
    //         href: '/blog'
    //     },
    //     {
    //         text: 'Tags',
    //         href: '/tags'
    //     },
    //     {
    //         text: 'Resume',
    //         href: 'https://docs.google.com/document/d/1jDZQS4hpT-PKAqR3LzD_eFrSi3xiyERt/edit?usp=sharing&ouid=109220842234109049467&rtpof=true&sd=true'
    //     }
    // ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/samantha-chu/'
        },
        {
            text: 'Medium',
            href: 'https://medium.com/@chusamantha'
        },
        {
            text: 'Literal',
            href: 'https://literal.club/samanthachu/'
        },
        // {
        //     text: 'Email',
        //     href: 'mailto:samantha.chu@gmail.com?subject=Hello!'
        // },
        // {
        //     text: 'X/Twitter',
        //     href: 'https://twitter.com/'
        // }
    ],
    // hero: {
    // title: ``,
    // text: "Hi! I'm **Samantha Chu**, a full stack Software Engineer at Business Insider with a passion for building scalable and user-centric solutions. With experience leading technical projects at Business Insider and an academic background from Cornell University, I specialize in creating high-performance applications using modern web technologies such as Node.js, React, and Python. Whether it's optimizing web performance, driving product innovation, or improving user experience, I thrive on solving complex problems and delivering impactful results. Take a look around to see my projects, skills, and accomplishments!",
    // image: {
    //     // src: '/profile.png',
    //     alt: 'A person sitting at a desk in front of a computer'
    // },
    // actions: [
    //     {
    //         text: 'Get in Touch',
    //         href: '/contact'
    //     }
    // ]
    // },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 0,
    projectsPerPage: 0
};

export default siteConfig;
