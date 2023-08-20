import React from "react";
import AppIcon from "./AppIcon";

function NavBar({ links }) {
    return (
        <div className="w-screen h-40 absolute top-0 flex justify-center items-center">
            {links.map((link) => (
                <div className=" w-24 h-16 m-5 flex justify-center items-center group">
                    <AppIcon iconName={link.icon} />
                    <div className="w-36 h-16 rounded-3xl absolute bg-white flex justify-center items-center scale-0 group-hover:scale-100 transition-all duration-300">
                        <div className=" text-[#371B78] font-sans text-2xl font-bold">
                            {link.name}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NavBar;
