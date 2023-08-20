import React from "react";
import NavBar from "./NavBar";

const mainScreen = () => {
    const links = [
        { name: "Home", icon: "house" },
        { name: "Info", icon: "user" },
        { name: "Projects", icon: "code" },
        { name: "Skills", icon: "brain" },
        { name: "Contact", icon: "envelope" },
    ];
    return (
        <div className="">
            <div className=" h-screen w-screen bg-[url('./img/main.jpg')] bg-cover flex items-center justify-center">
                <NavBar links={links} />
                <h1 className="absolute top-[35%] text-6xl text-[#B899E8] font-bold font-sans effect-box p-5">
                    Hi, my name is
                    <span className="ml-4 text-white"> Samuel Marchetti</span>
                </h1>
            </div>
            <div className="h-1/2 w-screen bg-black"></div>
        </div>
    );
};

export default mainScreen;
