import { Transition } from "@headlessui/react";
import {useEffect, useState} from "react";
import Link from "next/link";

interface AboutProps {
    profilePicture: string;
    description: string;
    setAboutHasLoaded: (state:boolean)=>void;
}

const About = ({ profilePicture, description, setAboutHasLoaded }: AboutProps) => {
    const [appear, setAppear] = useState(false)
    useEffect(()=>{
        setAppear(true)
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
                        afterEnter={() => setAboutHasLoaded(true)}
                    >
                        <h1 className="text-4xl font-extrabold text-center">About me</h1>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 text-center mx-auto">
                            {" "}
                            Software engineer, iOS developer{" "}
                        </p>
                        <p className="mt-4 px- text-gray-600 mt-8 text-justify text-lg max-w-2xl px-4">
                            {description}
                        </p>
                        <p className="text-blue-500 text-center text-lg max-w-2xl px-4 mt-8">
                            <a href={"https://ko-fi.com/tonirealp"}>
                                If you enjoyed any of my projects feel free to buy me a Ko-Fi
                            </a>
                        </p>
                    </Transition>
                </div>
            </div>
        </div>
    );
};
export default About;
