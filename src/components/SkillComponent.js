import React from "react";
import AppIcon from "./AppIcon";

function SkillComponent({ name, icon, lvl }) {
    console.log(icon);
    return (
        <div className="w-64 h-64  m-10 center bg-[#202124] rounded-xl shadow-inner border-white border-2">
            <AppIcon iconName={icon} style={"fa-9x"} />
        </div>
    );
}

export default SkillComponent;
