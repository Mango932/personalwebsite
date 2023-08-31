import React from "react";
import SkillComponent from "./SkillComponent";
import Fade from "react-reveal/Fade";

function Skills({ skills }) {
    const languages = skills.languages;
    const technologies = skills.technologies;
    return (
        <div className="flex w-full justify-center pt-24 pb-24 flex-col items-center">
            <Fade left>
                <div className="w-full pl-80 mb-20">
                    <h1>Skills</h1>
                    <div className="h-1 w-[34rem] bg-white" />
                </div>
            </Fade>
            <div className="w-full flex pl-80 pr-60 items-center mb-10 mt-10 ">
                <Fade>
                    <h2 className="text-2xl">Languages:</h2>
                </Fade>
                <div className="flex w-full justify-end ">
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
            <div className="w-full flex pl-80 pr-60 items-center mb-10 mt-10">
                <Fade>
                    <h2 className="text-2xl">Technologies:</h2>
                </Fade>
                <div className="flex w-full justify-end">
                    {technologies.map((skill, index) => (
                        <Fade delay={(index + 2) * 200}>
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
