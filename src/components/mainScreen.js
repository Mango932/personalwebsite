import React from "react";
import NavBar from "./NavBar";
import AppIcon from "./AppIcon";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

const mainScreen = () => {
    const links = [
        { name: "Home", icon: "house" },
        { name: "Info", icon: "user" },
        { name: "Projects", icon: "code" },
        { name: "Skills", icon: "brain" },
        { name: "Contact", icon: "envelope" },
    ];

    const projects = [
        { name: "Project 1", description: "Project 1 Description" },
        { name: "Project 2", description: "Project 2 Description" },
        { name: "Project 3", description: "Project 3 Description" },
    ];
    return (
        <div className="">
            <div className=" h-screen w-screen bg-[url('./img/spaceBg.jpg')] bg-cover center">
                <NavBar links={links} />
                <div className="absolute left-[10%] top-[40%]">
                    <h1 className=" text-white font-mono typewriter">
                        hello...
                    </h1>
                    <h1 className=" text-6xl text-white font-mono typewriter2 h-[4.3rem]">
                        my name is Samuel Marchetti
                    </h1>
                </div>
            </div>
            <div className="h-screen center relative">
                <div class="stars"></div>
                <div class="twinkling"></div>
                <LightSpeed>
                    <p className="text-white w-1/4 text-2xl font-mono text-right z-10">
                        Passionate{" "}
                        <span className="font-bold">
                            Fullstack Web Developer
                        </span>{" "}
                        committed to crafting captivating websites, dynamic web
                        applications, and user-centric mobile solutions.
                        Blending design sensibilities with{" "}
                        <span className="font-bold">technical expertise</span>{" "}
                        to create seamless digital experiences.{" "}
                        <span className="font-bold">
                            Specialized in front end developnent
                        </span>{" "}
                        and is looking for new oppurtunities in this field.
                    </p>
                </LightSpeed>
                <LightSpeed>
                    <div className="w-1/4 center z-10">
                        <AppIcon
                            iconName={"fa-solid fa-person-rays"}
                            style="fa-10x scale-[150%]"
                            color={"white"}
                        />
                    </div>
                </LightSpeed>
            </div>
            <div className="h-screen w-screen bg-gradient-to-t from-stone-900 to-[#030508] center">
                {projects.map((project, index) => (
                    <div className="w-1/5 h-[60%] center m-5 hover:scale-110 transition-all flex-col">
                        <Fade bottom>
                            <div className="bg-white w-full h-full flex center flex-col">
                                <h1 className="text-black text-5xl mb-12">
                                    {project.name}
                                </h1>
                                <p className="text-black">
                                    {project.description}
                                </p>
                            </div>
                        </Fade>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default mainScreen;
