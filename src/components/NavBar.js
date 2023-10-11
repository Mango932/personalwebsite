import React from "react";
import AppIcon from "./AppIcon";

function NavBar({ links, scroll }) {
    return (
        <div className="h-40">
            <input
                type="checkbox"
                className="ch absolute left-5 top-5 w-16 h-16 md:hidden z-10 opacity-0"
            />
            <div className="barIcon absolute left-5 top-5 md:hidden flex items-center group">
                <AppIcon iconName="bars" styles={"fa-4x"}></AppIcon>
            </div>
            <div className="closeIcon absolute left-5 top-5 md:invisible  hidden">
                <AppIcon iconName="close" styles={"fa-4x"}></AppIcon>
            </div>

            <div className="slider top-[-50rem] right-0 pr-10 pl-10 justify-center items-center absolute md:static md:left-auto  bg-[#202124] flex flex-col md:flex-row border-2 md:border-0 md:bg-transparent border-white transition-all duration-500">
                {links.map((link) => (
                    <button
                        className=" w-10 h-10 m-8 flex justify-center items-center text-white effect-box text-lg font-semibold"
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
