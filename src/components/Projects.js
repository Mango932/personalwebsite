import React from "react";
import ProjectBox from "../components/ProjectBox";
import Fade from "react-reveal/Fade";

function Projects({ projects }) {
    return (
        <div className="pt-24 pb-24 w-full flex flex-col items-center">
            <Fade right>
                <div className="w-full flex flex-col min-[1392px]:pl-[48rem] items-center mb-20">
                    <div className="flex flex-col items-center min-[1392px]:items-end ">
                        <h1 className="text-7xl mb-10">Projects</h1>
                        <div className="w-[20rem] min-[1392px]:w-[34rem] h-1 bg-white"></div>
                    </div>
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
