import React from "react";
import SkillComponent from "./SkillComponent";
import Fade from "react-reveal/Fade";

function Skills({ skills }) {
    const languages = skills.languages;
    const technologies = skills.technologies;
    return (
        <div className="pt-24 pb-24 w-full flex flex-col items-center">
            <Fade left>
                <div className="w-full flex flex-col min-[1600px]:pr-[65rem] items-center mb-20">
                    <div className="flex flex-col items-center min-[1600px]:items-start ">
                        <h1>Skills</h1>
                        <div className="h-1 w-[20rem] min-[1392px]:w-[34rem] bg-white" />
                    </div>
                </div>
            </Fade>
            <div className="w-full flex items-center mb-10 mt-10 justify-center p-5 flex-col min-[1392px]:flex-row pr-24 pl-24">
                <Fade>
                    <h2 className="text-2xl ">Languages:</h2>
                </Fade>
                <div className="flex w-full justify-center max-w-[90rem] min-[1392px]:justify-end flex-wrap">
                    {languages.map((skill, index) => (
                        <Fade delay={(index + 1) * 200}>
                            <SkillComponent
                                name={skill.name}
                                icon={skill.icon}
                                lvl={skill.lvl}
                            />
                        </Fade>
                    ))}
                </div>
            </div>
            <div className="w-full flex items-center mb-10 mt-10 justify-center p-5 flex-col min-[1392px]:flex-row pr-24 pl-24">
                <Fade>
                    <h2 className="text-2xl">Technologies:</h2>
                </Fade>
                <div className="flex w-full justify-center max-w-[90rem] min-[1392px]:justify-end flex-wrap">
                    {technologies.map((skill, index) => (
                        <Fade delay={(index + 1) * 200}>
                            <SkillComponent
                                name={skill.name}
                                icon={skill.icon}
                                lvl={skill.lvl}
                            />
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
