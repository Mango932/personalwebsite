import React from "react";
import AppIcon from "./AppIcon";
import Fade from "react-reveal/Fade";

function SkillComponent({ name, icon, lvl, color }) {
    console.log(lvl);
    return (
        <div className="w-48 h-48 mr-5 ml-5 center flex-col bg-[#202124] border-white border-2 rounded-full hover:scale-[120%] transition-all">
            <div className="group-hover:opacity-20">
                <AppIcon iconName={icon} style={"fa-6x"} />
            </div>
            <p className="text-white">{name}</p>
        </div>
    );
}

export default SkillComponent;
