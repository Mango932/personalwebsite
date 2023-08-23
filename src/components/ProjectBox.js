import React from "react";
import Fade from "react-reveal/Fade";

function ProjectBox({
    name,
    description,
    image,
    link,
    key,
    imgLayout,
    github,
}) {
    return (
        <div className="w-96 h-[44rem] center m-10 hover:scale-[115%] transition-all flex-col group">
            <Fade bottom>
                <div className=" w-full h-full flex center flex-col p-5 text-center bg-[#202124] duration-500 rounded-xl shadow-inner border-white border-2">
                    <h1 className="text-[#ffffff] text-5xl mb-12 font-bold">
                        {name}
                    </h1>
                    <p className="text-white mb-12 text-l">{description}</p>

                    {imgLayout === "mobile" ? (
                        <div className="h-[20rem] w-full center relative pb-12 ">
                            <img
                                src={image[0]}
                                className="w-28 absolute left-12 top-0 group-hover:left-[-5px] group-hover:top-auto transition-all duration-500"
                                alt=""
                            />
                            <img
                                src={image[1]}
                                className="w-28 absolute"
                                alt=""
                            />
                            <img
                                src={image[2]}
                                className="w-28 absolute right-12 top-9 group-hover:right-[-5px] group-hover:top-auto transition-all duration-500"
                                alt=""
                            />
                        </div>
                    ) : (
                        <div className="h-[20rem] w-full center relative pb-12 ">
                            <img
                                src={image[0]}
                                className="w-48 absolute top-5 left-5 group-hover:left-10 group-hover:top-0 transition-all duration-500"
                                alt=""
                            />
                            <img
                                src={image[1]}
                                className="w-48 absolute top-16 right-5 group-hover:right-10 group-hover:top-40 transition-all duration-500"
                                alt=""
                            />
                        </div>
                    )}

                    <div className="center">
                        <a href={github} target="_blank">
                            <img
                                src="img/github-mark/github-mark-white.png"
                                className="w-10 ml-5"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default ProjectBox;
