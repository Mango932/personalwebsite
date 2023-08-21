import React from "react";

function NavBar({ links }) {
    return (
        <div className="h-40 absolute top-0 flex justify-center items-center">
            {links.map((link) => (
                <div className=" w-16 h-16 m-8 flex justify-center items-center text-white effect-box text-lg">
                    {link.name}
                </div>
            ))}
        </div>
    );
}

export default NavBar;
