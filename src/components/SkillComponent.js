import React from "react";
import AppIcon from "./AppIcon";
import classnames from "classnames";

function SkillComponent({ name, icon, lvl, color }) {
    console.log(lvl);
    return (
        <div className="w-48 h-48  m-10 center bg-[#202124] rounded-xl shadow-inner border-white border-2 hover:scale-125 transition-all relative group">
            <div className="group-hover:opacity-20">
                <AppIcon iconName={icon} style={"fa-6x"} />
            </div>
            <div
                className={classnames(
                    `w-full absolute bottom-[-2px] bg-[#F36C5D] rounded-b-xl h-0 group-hover:h-[${lvl}] bg-opacity-80 text-white center scale-0 group-hover:scale-100 transition-all`
                )}
            >
                <h1>{lvl}</h1>
            </div>
        </div>
    );
}

export default SkillComponent;
