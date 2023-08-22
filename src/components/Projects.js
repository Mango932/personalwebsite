import React from "react";
import ProjectBox from "../components/ProjectBox";

function Projects({ projects }) {
    return (
        <div className="pt-48 pb-48 w-screen  flex flex-col items-center justify-center ">
            <h1 className="text-[#F36C5D] w-full text-center text-8xl mb-20 font-extrabold">
                Projects
            </h1>
            <div className="center">
                {projects.map((project, index) => (
                    <ProjectBox
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        key={index}
                        imgLayout={project.imgLayout}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
