import React from "react";

function NavBar({ links, scroll }) {
    return (
        <div className="h-40 absolute top-0 flex justify-center items-center">
            {links.map((link) => (
                <button
                    className=" w-16 h-16 m-8 flex justify-center items-center text-white effect-box text-lg font-semibold"
                    onClick={() => scroll(link.ref)}
                >
                    {link.name}
                </button>
            ))}
        </div>
    );
}

export default NavBar;
