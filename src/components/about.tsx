import { Transition } from "@headlessui/react";
import {useEffect, useState} from "react";

interface AboutProps {
    profilePicture: string;
    setAboutHasLoaded: (state:boolean)=>void;
}

const About = ({ profilePicture, setAboutHasLoaded }: AboutProps) => {
    const [appear, setAppear] = useState(false)
    useEffect(()=>{
        setAppear(true)
        setAboutHasLoaded(true)
    },[appear])
    return (
        <div id="about">
            <div className="pt-32 mx-auto w-full max-w-7xl px-4">
                <Transition show={appear} unmount className="text-center">
                    <Transition.Child
                        as="span"
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        className="text-6xl font-extrabold text-center "
                    >
                        Hi I am{" "}
                    </Transition.Child>
                    <Transition.Child
                        as="span"
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        className="text-6xl font-extrabold text-center text-primary delay-500"
                    >
                        Toni Realp
                    </Transition.Child>
                </Transition>
                <div className="flex flex-col justify-center items-center lg:justify-between lg:flex-row mx-auto mt-16 lg:mt-24">
                    <Transition
                        show={appear}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        className="max-w-sm delay-1000"
                    >
                        <img src={profilePicture} className="rounded-md" alt="profile picture" />
                    </Transition>
                    <Transition
                        show={appear}
                        enter="transition-opacity duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        className="lg:max-w-md xl:max-w-2xl mt-12 lg:mt-0 delay-1500"
                    >
                        <h1 className="text-4xl font-extrabold text-center">About me</h1>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 text-center mx-auto">
                            {" "}
                            Software engineer, full-stack developer{" "}
                        </p>
                        <p className="mt-4 px- text-gray-600 mt-8 text-justify text-lg max-w-2xl px-4">
                            {" "}
                            I am Toni, currently a software engineer student and freelancer full-stack developer. During
                            my years of experience, I've worked in many different fields ranging from videogame
                            development to full-stack programming, including an Internship at HP Inc. This upcoming year
                            I'll be graduating from university and I'm currently looking for the next challenge to
                            develop my software engineer career to its fullest potential.{" "}
                        </p>
                    </Transition>
                </div>
            </div>
        </div>
    );
};
export default About;
