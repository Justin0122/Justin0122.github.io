const siteConfig = {
    title: 'Justin Jongstra',
    subtitle: 'Software Ontwikkelaar',
    description: 'Justin Jongstra - Portfolio.',
    image: {
        src: 'https://justinjongstra.nl/preview.webp',
        alt: 'Justin Jongstra'
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Projecten', href: '/projects/' },
        { text: 'Blog', href: '/blog/' },
        { text: 'Tags', href: '/tags/' }
    ],
    footerNavLinks: [
        { text: 'Over', href: '/nl/about/' },
        { text: 'Contact', href: '/nl/contact/' }
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
        title: 'Hoi daar! 👋',
        text: "Ik ben Justin Jongstra, een softwareontwikkelaar uit Nederland. Ik heb een passie voor webontwikkeling, open-source en nieuwe technologieën.",
        image: {
            src: 'https://avatars.githubusercontent.com/u/85618156?v=4',
            alt: 'Justin Jongstra'
        },
        actions: [
            { text: 'Neem Contact Op', href: '/contact' }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
