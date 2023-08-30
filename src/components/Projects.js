import React from "react";
import ProjectBox from "../components/ProjectBox";
import Fade from "react-reveal/Fade";

function Projects({ projects }) {
    return (
        <div className="pt-48 pb-48 w-screen  flex flex-col items-center justify-center ">
            <Fade>
                <h1 className="text-[#F36C5D] w-full text-center text-8xl mb-10 font-bold effect-box,kkk">
                    Projects
                </h1>
                <div className="w-[26rem] h-1 bg-white mb-20"></div>
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
