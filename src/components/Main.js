import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import Summary from "./Summary";
import Projects from "./Projects";
import Skills from "./Skills";
import projects from "./ProjectInfo";
import skills from "./SkillInfo";
import Contact from "./Contact";
import AppIcon from "./AppIcon";

const Main = () => {
    const navHome = useRef(null);
    const navSummary = useRef(null);
    const navProjects = useRef(null);
    const navSkills = useRef(null);
    const navContact = useRef(null);

    const links = [
        { name: "Home", icon: "house", ref: navHome },
        { name: "Info", icon: "user", ref: navSummary },
        { name: "Projects", icon: "code", ref: navProjects },
        { name: "Skills", icon: "brain", ref: navSkills },
        { name: "Contact", icon: "envelope", ref: navContact },
    ];

    const handleScroll = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const [bounce, setBounce] = useState(false);

    return (
        <div className="">
            <div
                ref={navHome}
                className=" h-screen w-screen  bg-contain flex justify-center"
                style={{ backgroundImage: "url(img/spaceBg.jpg)" }}
            >
                <NavBar links={links} scroll={handleScroll} />
                <div className="absolute left-[10%] top-[40%] font-bold font-mono ">
                    <h1 className="typewriter text-white">Hello,</h1>
                    <h1 className=" text-6xl typewriter2 h-[4.3rem] text-white">
                        I am Samuel Marchetti.
                    </h1>
                </div>
            </div>
            <div
                className="bg-gradient-to-b from-black via-[#0C101B] to-black z-1"
                ref={navSummary}
            >
                <Summary />
                <div ref={navProjects}>
                    <Projects projects={projects} />
                </div>
                <div ref={navSkills}>
                    <Skills skills={skills} />
                </div>
                <div ref={navContact}>
                    <Contact />
                </div>
                <div className="flex mt-10 justify-center bg-[#0C101B] pt-5 pb-5">
                    <button
                        onMouseEnter={() => setBounce(true)}
                        onMouseLeave={() => setBounce(false)}
                        onClick={() => handleScroll(navHome)}
                        className="mr-10"
                    >
                        <AppIcon iconName="chevron-up" bounce={bounce} />
                    </button>
                    <a
                        href="https://github.com/Mango932"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition-all"
                    >
                        <AppIcon
                            iconName="fa-brands fa-github"
                            styles={"fa-4x"}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samuel-marchetti-4100bb205/"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-3 hover:scale-110 transition-all"
                    >
                        <AppIcon
                            iconName="fa-brands fa-linkedin"
                            styles={"fa-4x"}
                        />
                    </a>
                    <button
                        onMouseEnter={() => setBounce(true)}
                        onMouseLeave={() => setBounce(false)}
                        className="ml-10"
                        onClick={() => handleScroll(navHome)}
                    >
                        <AppIcon iconName="chevron-up" bounce={bounce} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;
