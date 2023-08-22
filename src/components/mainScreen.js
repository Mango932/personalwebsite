import React from "react";
import NavBar from "./NavBar";
import Summary from "./Summary";
import Projects from "./Projects";

const mainScreen = () => {
    const links = [
        { name: "Home", icon: "house" },
        { name: "Info", icon: "user" },
        { name: "Projects", icon: "code" },
        { name: "Skills", icon: "brain" },
        { name: "Contact", icon: "envelope" },
    ];

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
        },
        {
            name: "Draco Constelation",
            description:
                "Website built with html/js/css. Information about the draco constelation as well as a visual representation of the constelation with clickable stars",
            image: [],
        },
        {
            name: "Project 3",
            description: "Project 3 Description",
            image: [],
        },
    ];

    return (
        <div className="">
            <div className=" h-screen w-screen bg-[url('./img/spaceBg.jpg')] bg-cover center">
                <NavBar links={links} />
                <div className="absolute left-[10%] top-[40%]">
                    <h1 className=" text-white font-mono typewriter">Hello,</h1>
                    <h1 className=" text-6xl text-white font-mono typewriter2 h-[4.3rem]">
                        I am Samuel Marchetti.
                    </h1>
                </div>
            </div>
            <div className="bg-black">
                <Summary />
                <Projects projects={projects} />
            </div>
        </div>
    );
};

export default mainScreen;
