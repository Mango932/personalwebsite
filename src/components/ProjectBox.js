import React from "react";
import Fade from "react-reveal/Fade";
import AppIcon from "./AppIcon";

function ProjectBox({ name, description, image, link, key, imgLayout }) {
    return (
        <div className="w-96 h-[44rem] center m-10 hover:scale-[115%] transition-all flex-col group">
            <Fade bottom>
                <div className=" w-full h-full flex center flex-col p-5 text-center bg-[#202124] duration-500 rounded-xl shadow-inner border-white border-2">
                    <h1 className="text-[#ffffff] text-5xl mb-12 font-bold">
                        {name}
                    </h1>
                    <p className="text-white mb-12">{description}</p>

                    {imgLayout == "mobile" ? (
                        <div className="h-[20rem] w-full center relative pb-12 ">
                            <img
                                src={image[0]}
                                className="w-28 absolute left-12 top-0 group-hover:top-auto group-hover:left-[-5px] transition-all duration-500"
                            />
                            <img src={image[1]} className="w-28 absolute" />
                            <img
                                src={image[2]}
                                className="w-28 absolute right-12 top-9 group-hover:top-auto group-hover:right-[-5px] transition-all duration-500"
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="center">
                        <AppIcon iconName={"code"} />
                        <img
                            src="img/github-mark/github-mark-white.png"
                            className="w-10 ml-5"
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default ProjectBox;
