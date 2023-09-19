import React from "react";
import AppIcon from "./AppIcon";

function SkillComponent({ name, icon, lvl, color }) {
    return (
        <div className="shad w-48 h-48 m-5 center flex-col bg-[#202124] border-white border-2 rounded-full hover:scale-[120%] transition-all duration-500">
            <div className="group-hover:opacity-20">
                <AppIcon iconName={icon} styles={"fa-6x"} />
            </div>
            <p className="text-white">{name}</p>
        </div>
    );
}

export default SkillComponent;
