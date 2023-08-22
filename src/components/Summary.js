import React from "react";
import Fade from "react-reveal/Fade";

function Summary() {
    return (
        <div className="h-[40rem] center relative flex ">
            <div className=" w-1/3 center flex-col p-10">
                <Fade top>
                    <p className="text-[#F36C5D] text-5xl text-center z-10 mb-10 font-bold">
                        Who am I?
                    </p>
                </Fade>
                <Fade left>
                    <p className="text-[#ffffff] text-xl text-center">
                        Passionate{" "}
                        <span className="font-bold">
                            Fullstack Web Developer
                        </span>{" "}
                        committed to crafting captivating websites, dynamic web
                        applications, and user-centric mobile solutions.
                        Blending design sensibilities with{" "}
                        <span className="font-bold">technical expertise</span>{" "}
                        to create seamless digital experiences.{" "}
                        <span className="font-bold">
                            Specialized in front end developnent
                        </span>{" "}
                        and is looking for new oppurtunities in this field.
                    </p>
                </Fade>
            </div>
            <div className="h-80 w-1 bg-[#E9F8F9]"></div>
            <Fade right>
                <div className="w-1/3">
                    <img
                        src={require("../img/program.png")}
                        alt="Samuel Marchetti"
                    />
                </div>
            </Fade>
        </div>
    );
}

export default Summary;
