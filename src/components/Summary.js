import React from "react";
import Fade from "react-reveal/Fade";

function Summary() {
    return (
        <div className="h-[40rem] center relative flex flex-wrap">
            <div className=" w-[40rem] center flex-col p-10 ">
                <Fade top>
                    <h1 className="text-5xl mb-10">Who am I?</h1>
                </Fade>
                <Fade left>
                    <p className="text-[#ffffff] text-xl text-center">
                        Passionate{" "}
                        <span className="font-bold">
                            a Fullstack Web Developer
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
            <div className="h-80 w-1 hidden bg-[#E9F8F9] lg:block"></div>
            <div className="w-[40rem] ">
                <Fade right>
                    <img
                        src={"./img/program.png"}
                        alt="Image Program"
                        className="object-contain"
                    />
                </Fade>
            </div>
        </div>
    );
}

export default Summary;
