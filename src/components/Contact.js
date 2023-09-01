import React from "react";
import AppIcon from "../components/AppIcon";
import Fade from "react-reveal/Fade";

function Contact() {
    return (
        <Fade>
            <div className="flex items-center flex-col pt-32 pb-24">
                <h1>Contact Me</h1>
                <div className="h-1 w-[34rem] bg-white mb-20" />
                <form
                    action="https://formsubmit.co/sammarchetti05@gmail.com"
                    method="POST"
                    className="flex flex-col"
                >
                    <input type="hidden" name="_name" value="_blank" />
                    <div className="flex">
                        <h3 className="mr-10 w-32 text-right">Name:</h3>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-96 h-10 bg-[#202124] border-white border-2 rounded-xl text-white p-2 align-text-top flex-wrap"
                        />
                    </div>
                    <div className="flex">
                        <h3 className="mr-10 w-32 text-right">Email:</h3>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-96 h-10 bg-[#202124] border-white border-2 rounded-xl text-white p-2 align-text-top"
                        />
                    </div>
                    <div className="flex mb-5">
                        <h3 className="mr-10 w-32 text-right">Information:</h3>
                        <textarea
                            name="message"
                            required
                            className="w-96 h-32 bg-[#202124] border-white border-2 rounded-xl text-white p-2 align-text-top pb-24"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={() => console.log("Clicked")}
                        className="hover:opacity-60 hover:scale-110 transition-all"
                    >
                        <AppIcon iconName="circle-check" styles="fa-3x" />
                    </button>
                </form>
            </div>
        </Fade>
    );
}

export default Contact;
