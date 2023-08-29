import React from "react";
import SkillComponent from "./SkillComponent";

function Skills({ skills }) {
    console.log(skills);
    return (
        <div className="flex w-full justify-center">
            <div className="center w-[20%] ">
                <h1 className="text-[#F36C5D] text-7xl font-bold rotate-[-90deg] ml-48">
                    Skills
                </h1>
                <div className="h-72 w-1 bg-white"></div>
            </div>
            <div className="center flex-wrap ">
                {skills.map((skill, index) => (
                    <SkillComponent
                        name={skill.name}
                        icon={skill.icon}
                        lvl={skill.lvl}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
