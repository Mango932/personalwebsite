import React from "react";
import AppIcon from "../components/AppIcon";
import Fade from "react-reveal/Fade";

function Contact() {
    return (
        <Fade>
            <div className="flex items-center flex-col pt-32 pb-24">
                <h1>Contact</h1>
                <div className="h-1 w-[20rem] md:w-[34rem] bg-white mb-20" />
                <form
                    action="https://formsubmit.co/sammarchetti05@gmail.com"
                    method="POST"
                    className="flex flex-col items-center"
                >
                    <input type="hidden" name="_name" value="_blank" />
                    <div className="flex flex-col sm:flex-row">
                        <h3 className="sm:mr-10 sm:w-32 sm:text-right text-center mb-5">
                            Name:
                        </h3>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-[20rem] md:w-[30rem] h-10 bg-[#202124] border-white border-2 rounded-xl text-white p-2 align-text-top flex-wrap mb-10"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <h3 className="sm:mr-10 sm:w-32 sm:text-right text-center mb-5">
                            Email:
                        </h3>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-[20rem] md:w-[30rem] h-10 bg-[#202124] border-white border-2 rounded-xl text-white p-2 align-text-top mb-10"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mb-5">
                        <h3 className="sm:mr-10 sm:w-32 sm:text-right text-center mb-5">
                            Information:
                        </h3>
                        <textarea
                            name="message"
                            required
                            className="w-[20rem] md:w-[30rem] h-32 bg-[#202124] border-white border-2 rounded-xl text-white p-2 align-text-top pb-24"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={() => console.log("Clicked")}
                        className="hover:opacity-60 hover:scale-110 transition-all mt-5"
                    >
                        <AppIcon iconName="circle-check" styles="fa-3x" />
                    </button>
                </form>
            </div>
        </Fade>
    );
}

export default Contact;
