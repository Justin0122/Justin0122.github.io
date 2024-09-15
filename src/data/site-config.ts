export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    icon?: string;
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
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Justin Jongstra',
    subtitle: 'Software Developer',
    description: 'Explore the portfolio of Justin Jongstra, a passionate software developer from the Netherlands. Discover innovative projects like a Discord bot, an API utilizing the Spotify API, real-time IP monitoring tools and more.',
    image: {
        src: 'https://justinjongstra.nl/preview.webp',
        alt: 'Justin Jongstra'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects/'
        },
        {
            text: 'Blog',
            href: '/blog/'
        },
        {
            text: 'Tags',
            href: '/tags/'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about/'
        },
        {
            text: 'Contact',
            href: '/contact/'
        },
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/justin0122/',
            icon: 'github'
        },
        {
            text: 'Discord',
            href: 'https://discord.com/users/852960326990430215',
            icon: 'discord'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/justin._x3/',
            icon: 'instagram'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/justin-jongstra-11b873207/',
            icon: 'linkedin'
        },
        {
            text: 'Packagist',
            href: 'https://packagist.org/users/justin0122/',
            icon: 'packagist'
        },
        {
            text: 'NPM',
            href: 'https://www.npmjs.com/~justin0122',
            icon: 'npm'
        },
        {
            text: 'Spotify',
            href: 'https://open.spotify.com/user/brilsmurfj',
            icon: 'spotify'
        },
    ],
    hero: {
        title: 'Hi there! 👋',
        text: "I'm Justin Jongstra, a software developer from the Netherlands. I'm passionate about web development, open-source, and new technologies.",
        image: {
            src: 'https://avatars.githubusercontent.com/u/85618156?v=4',
            alt: 'Justin Jongstra'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
