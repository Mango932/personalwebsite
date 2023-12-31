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
        <div className="shad max-w-[24rem] h-[44rem] center m-10 hover:scale-[115%] transition-all flex-col group rounded-xl duration-500">
            <Fade bottom>
                <div className=" w-full h-full flex center flex-col p-5 text-center bg-[#202124] rounded-xl border-white border-2">
                    <h2 className="leading-[120%] text-4xl sm:text-5xl">
                        {name}
                    </h2>
                    <p className="text-white mb-12 text-l">{description}</p>

                    {imgLayout === "mobile" ? (
                        <div className="h-[20rem] w-full  center relative pb-12 ">
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
                        <></>
                    )}
                    {imgLayout === "website" ? (
                        <div className="h-[20rem] w-full center relative pb-12 ">
                            <img
                                src={image[0]}
                                className="w-64 absolute top-5 left-5 group-hover:left-10 group-hover:top-[0rem] transition-all duration-500"
                                alt=""
                            />
                            <img
                                src={image[1]}
                                className="w-64 absolute top-28 right-5 group-hover:right-10 group-hover:top-[9.5rem] transition-all duration-500"
                                alt=""
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                    {imgLayout === "website2" ? (
                        <div className="h-[20rem] w-full center relative pb-12">
                            <img
                                src={image[0]}
                                className="w-48 absolute top-5 right-0 sm:right-10 group-hover:left-6 sm:group-hover:left-20 group-hover:top-[-2rem] transition-all duration-500"
                                alt=""
                            />
                            <img
                                src={image[1]}
                                className="w-48 absolute top-16 left-0 sm:left-10 group-hover:left-6 sm:group-hover:left-20 group-hover:top-[5rem] transition-all duration-500"
                                alt=""
                            />
                            <img
                                src={image[2]}
                                className="w-48 absolute top-32 right-0 sm:right-10 group-hover:left-6 sm:group-hover:left-20 group-hover:top-[12rem] transition-all duration-500"
                                alt=""
                            />
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className="center">
                        <a href={github} target="_blank" rel="noreferrer">
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
