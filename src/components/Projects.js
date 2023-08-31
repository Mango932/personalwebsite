import React from "react";
import ProjectBox from "../components/ProjectBox";
import Fade from "react-reveal/Fade";

function Projects({ projects }) {
    return (
        <div className="pt-24 pb-24 w-full flex flex-col items-center">
            <Fade right>
                <div className="w-full flex flex-col pr-80 items-end mb-20">
                    <h1 className="text-[#F36C5D] text-8xl mb-10 font-bold">
                        Projects
                    </h1>
                    <div className="w-[34rem] h-1 bg-white"></div>
                </div>
            </Fade>
            <div className="center flex-wrap">
                {projects.map((project, index) => (
                    <ProjectBox
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        key={index}
                        imgLayout={project.imgLayout}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
