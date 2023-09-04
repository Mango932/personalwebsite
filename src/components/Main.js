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
        <div className="w-screen">
            <div
                ref={navHome}
                className=" h-screen w-full flex lg:bg-right flex-col bg-[length:800%_50%] bg-center lg:bg-cover "
                style={{
                    backgroundImage: "url(img/spaceBg.jpg)",
                }}
            >
                <div className="h-full w-full flex flex-col absolute">
                    <NavBar links={links} scroll={handleScroll} />
                    <div className="w-full font-mono pl-[10%] mt-[10%]">
                        <div className="w-32 2xl:w-52 mt-24 lg:mt-0 ">
                            <div className=" typewriter text-white text-4xl 2xl:text-6xl font-bold transition-all">
                                Hello,
                            </div>
                        </div>
                        <div className="mt-10 w-[28rem] 2xl:w-[46rem] ">
                            <div className="typewriter2 text-white text-4xl 2xl:text-6xl font-bold transition-all">
                                I am Samuel Marchetti.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-b from-black via-[#0C101B] to-black"
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
