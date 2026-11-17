export const portfolioData = [
    {
        imgSrc: 'https://i.imgur.com/0kmoEjX.png',
        title: 'Astronomy',
        skills: ['React', 'Tailwind'],
        description:
            'A complete redesign of the website for the Club Astro Véga de la Lyre de Boisredon. Visitors can learn about the club, check the meeting calendar, browse photo galleries, find astronomy and weather resources, and contact the club to join or ask a question.',
        anim: 'fade-right',
    },
    {
        imgSrc: 'https://i.imgur.com/p3cmTS4.png',
        title: 'Railclock',
        skills: ['Typescript', 'React', 'CSS'],
        description:
            'Railclock is a team-built alternative to SNCF Connect. It makes it easy to look up train times, check connections, and plan journeys through a simple interface designed to help users find the right train quickly.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/kAEvcEf.png',
        title: 'Crabank',
        skills: ['React', 'MUI', 'Csharp'],
        description:
            'Crabank is a web app that simulates online banking. Users can manage their accounts, check balances, make transfers, and track transactions. The goal was to recreate a smooth, secure banking experience with a modern interface that works in any browser.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/AFrUUli.png',
        title: 'Le Cube',
        skills: ['React', 'MUI'],
        description:
            'Le Cube is a website for a Minecraft server. Players can link their Minecraft accounts, see stats such as distance traveled, deaths, logins, and playtime, and customize their profiles. A friends page shows who is online and what game mode they are playing.',
        anim: 'fade-left',
    },
    {
        imgSrc: 'https://i.imgur.com/Ym9C59n.png',
        title: 'ClimatRPG',
        skills: ['Python'],
        description:
            'ClimatRPG is a 2D game built in Python by a team of three. In one-on-one battles, players choose between a mage with more mana, a warrior with stronger defense, and an assassin who deals more damage. Players can explore the map, find chests and items, and start a fight by approaching an opponent.',
        demoURL: '',
        repoURL: '',
        anim: 'fade-right',
    },
    {
        imgSrc: 'https://i.imgur.com/SG5ppmG.png',
        title: 'Nitroterm',
        skills: ['React', 'Csharp', 'Tailwind'],
        description:
            'Nitroterm is a social network inspired by Twitter for people interested in computing and software development. Users can create accounts, publish posts, like, dislike, comment on and share posts, and follow other profiles. They can also list their favorite programming languages or technologies.',
        anim: 'fade-up',
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}img/pigeon-shooter.png`,
        title: 'PigeonShooter',
        showAfterExpand: true,
        skills: ['Csharp', 'HTML', 'JavaScript'],
        description:
            'A 2D arcade game where players aim at flying pigeons, build up their score, and manage their lives and bombs. Built in C# with Exclaim, with desktop and WebAssembly versions.',
    },
    {
        imgSrc: `${import.meta.env.BASE_URL}img/minecraft-guessr.png`,
        title: 'MinecraftGuessr',
        showAfterExpand: true,
        pixelArt: true,
        skills: ['Typescript', 'React', 'Csharp', 'CSS', 'HTML'],
        description:
            'Each day, players get four Minecraft ingredients and try to discover every possible recipe on a 3 × 3 crafting grid. Successful discoveries earn points on a global leaderboard. The game uses a React frontend and an ASP.NET Core API.',
    },
];

const skillIcons = {
    JavaScript: 'skill-icons:javascript',
    React: 'skill-icons:react-dark',
    Astro: 'skill-icons:astro',
    CSS: 'skill-icons:css',
    Sass: 'skill-icons:sass',
    StyledComponents: 'skill-icons:styledcomponents',
    Bootstrap: 'skill-icons:bootstrap',
    Tailwind: 'skill-icons:tailwindcss-dark',
    Csharp: 'skill-icons:cs',
    Typescript: 'skill-icons:typescript',
    MUI: 'skill-icons:materialui-dark',
    HTML: 'skill-icons:html',
    Python: 'skill-icons:python-dark',
};

const skillLabels = {
    Csharp: 'C#',
    Typescript: 'TypeScript',
    Tailwind: 'Tailwind CSS',
    MUI: 'Material UI',
};

export const getPortfolioData = portfolioData.map((item) => {
    return {
        ...item,
        skills: item.skills.map((skill) => ({
            icon: skillIcons[skill],
            label: skillLabels[skill] ?? skill,
        })),
    };
});
