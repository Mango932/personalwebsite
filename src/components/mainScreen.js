import React, { useRef } from "react";
import NavBar from "./NavBar";
import Summary from "./Summary";
import Projects from "./Projects";
import Skills from "./Skills";

const MainScreen = () => {
    const projects = [
        {
            name: "Life Counter App",
            description:
                "Mobile app built with react native used to keep track of life totals for a card game, has 2 different layouts with player customization.",
            image: [
                "img/LCA4.png",
                "img/LCA1.png",
                "img/LCA3.png",
                "img/LCA4.png",
            ],
            imgLayout: "mobile",
            github: "https://github.com/Mango932/LifeCounterMTG",
        },
        {
            name: "Personal Website",
            description:
                "Website built using react framework with paralax effect and responsive hover animation as well as fade component scroll animations",
            image: ["img/Personal1.png", "img/Personal2.png"],
            github: "https://github.com/Mango932/personalwebsite",
        },
        {
            name: "Draco Constelation",
            description:
                "Website built with html/js/css. Information about the draco constelation as well as a visual representation of the constelation with clickable stars",
            image: ["img/Draco1.png", "img/Draco2.png"],
            imgLayout: "website",
            github: "https://github.com/Mango932/draco_constellation",
        },
    ];

    const navSummary = useRef(null);
    const navProjects = useRef(null);

    const links = [
        { name: "Home", icon: "house", ref: "navHome" },
        { name: "Info", icon: "user", ref: navSummary },
        { name: "Projects", icon: "code", ref: navProjects },
        { name: "Skills", icon: "brain", ref: "navSkills" },
        { name: "Contact", icon: "envelope", ref: "navContact" },
    ];

    const skills = [
        { name: "React", icon: "fa-brands fa-react", lvl: "80%" },
        { name: "Node", icon: "fa-brands fa-node", lvl: "80%" },
        { name: "JavaScript", icon: "fa-brands fa-js", lvl: "80%" },
        { name: "HTML", icon: "fa-brands fa-html5", lvl: "90%" },
        { name: "CSS", icon: "fa-brands fa-css3", lvl: "90%" },
        { name: "python", icon: "fa-brands fa-python", lvl: "75%" },
        { name: "Github", icon: "fa-brands fa-git-alt", lvl: "75%" },
        { name: "java", icon: "fa-brands fa-java", lvl: "50%" },
    ];

    const handleScroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="">
            <div
                className=" h-screen w-screen  bg-cover center bg-fixed"
                style={{ backgroundImage: "url(img/spaceBg.jpg)" }}
            >
                <NavBar links={links} scroll={handleScroll} />
                <div className="absolute left-[10%] top-[40%] font-bold font-mono text-white">
                    <h1 className="  typewriter">Hello,</h1>
                    <h1 className=" text-6xl  typewriter2 h-[4.3rem]">
                        I am Samuel Marchetti.
                    </h1>
                </div>
            </div>
            <div className="bg-black z-1" ref={navSummary}>
                <Summary />
                <div ref={navProjects}>
                    <Projects projects={projects} />
                </div>
                <Skills skills={skills} />
            </div>
        </div>
    );
};

export default MainScreen;
