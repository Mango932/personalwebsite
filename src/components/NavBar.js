import React from "react";
import AppIcon from "./AppIcon";

function NavBar({ links, scroll }) {
    return (
        <div className="h-40">
            <input
                type="checkbox"
                className="ch absolute left-5 top-5 w-16 h-16 lg:hidden z-10 opacity-0"
            />
            <div className="barIcon absolute left-5 top-5 lg:hidden flex items-center group">
                <AppIcon iconName="bars" styles={"fa-4x"}></AppIcon>
            </div>
            <div className="closeIcon absolute left-5 top-5 lg:invisible  hidden">
                <AppIcon iconName="close" styles={"fa-4x"}></AppIcon>
            </div>

            <div className="slider top-[-100rem] right-[-15rem] pr-10 pl-10 justify-center items-center absolute lg:static lg:left-auto  bg-[#202124] flex flex-col lg:flex-row border-2 lg:border-0 lg:bg-transparent border-white transition-all">
                {links.map((link) => (
                    <button
                        className=" w-16 h-16 m-8 flex justify-center items-center text-white effect-box text-lg font-semibold"
                        onClick={() => scroll(link.ref)}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default NavBar;
