import React from "react";
import Fade from "react-reveal/Fade";

function Summary() {
    return (
        <div className=" center relative flex flex-wrap pt-24 pb-24">
            <div className=" max-w-[40rem] center flex-col p-10 ">
                <Fade top>
                    <h1 className="text-5xl mb-10">Who am I?</h1>
                </Fade>
                <Fade left>
                    <p className="text-[#ffffff] text-xl text-center">
                        <span className="font-bold">
                            Welcome to my personal website!
                        </span>{" "}
                        I am a second-year Computer Engineering student at the
                        University of Ottawa, passionate about the intersection
                        of software development and hardware integration. Here,
                        you'll find my sofware and website related skills. From
                        crafting responsive dashboards to developing
                        cross-platform mobile applications, I invite you to
                        explore my diverse portfolio and learn more about my
                        journey in the world of technology.
                    </p>
                </Fade>
            </div>

            <div className="w-[40rem] flex  items-center  justify-center">
                <div className="h-80 w-1 hidden bg-[#E9F8F9] xl:block transition-all"></div>
                <Fade right>
                    <img
                        src={"./img/program.png"}
                        alt="computer"
                        className="object-contain"
                    />
                </Fade>
            </div>
        </div>
    );
}

export default Summary;
