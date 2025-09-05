import { BookText, CodeSquare, HomeIcon, UserRound, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";




export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Taller de aplicaciones para internet",
        subtitle: "",
        description: "Aprendí a manejar Android Studio para crear aplicaciones web, trabajando con lenguajes de programación(Java) y bases de datos.",
        date: "ago 2025",
    },
    {
        id: 2,
        title: "Analisis de Sistemas",
        subtitle: "",
        description: "Estudie para comprender las necesidades del sistema, identificando Requerimientos funcionales como no funcionales, proponiendo soluciones y diseñando modelos que sirvan de base para el desarrollo de software.",
        date: "May 2025",
    },
    {
        id: 3,
        title: "Programacion Segura",
        subtitle: "",
        description: "Desarrolle a implementar buenas practicas y tecnicas de decodificacion para prevenir vulnerabilidades y fortalecer la seguridad de las aplicaciones.",
        date: "Ago 2024",
    },
    {
        id: 4,
        title: "Taller base de datos",
        subtitle: "",
        description: "Aprendi a implementar Diseño y administración de bases de datos relacionales utilizando SQL y buenas prácticas de modelado.",
        date: "Mar 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de estudio",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 75,
        text: "Horas practicadas",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 2,
        text: "Proyectos Realizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Diseño de bases de datos",
        description: "creación de modelos, normalización y conexión con aplicaciones.",
    },
    {
        icon: <Pencil />,
        title: "Desarrollo de interfaces",
        description: "diseño moderno y adaptable utilizando CSS y frameworks.",
    },
    {
        icon: <Computer />,
        title: "Programación en múltiples lenguajes",
        description: "manejo de Python, C#, Java, HTML, entre otros.",
    },
    {
        icon: <Book />,
        title: "Frameworks arquitecturas",
        description: "desarrollo de aplicaciones bajo el patrón MVC y con herramientas como Laravel.",
    },
    {
        icon: <Rocket />,
        title: "Análisis y diseño",
        description: "elaboración de diagramas UML y ER para planificación de proyectos.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "ERP",
        image: "/BasuradeERP.jpg",
        urlGithub: "https://github.com/PequodNs/Erp",
        urlDemo: "https://github.com/PequodNs/Erp",
    },
    {
        id: 2,
        title: "PortFolio",
        image: "/portFolio.png",
        urlGithub: "https://github.com/PequodNs/PortFolio",
        urlDemo: "https://github.com/PequodNs/PortFolio",
    },
];
