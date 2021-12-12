import { NextPage } from "next";
import Image from "next/image";
import profilePicture from "../public/profile-picture.jpg";

const About: NextPage = () => {
    return (
        <div id="about" className="pt-32 mx-auto w-full max-w-7xl pb-20 px-4">
            <h1 className="text-5xl font-extrabold text-center">
                Hi I'm <span className="text-primary">Toni Realp</span>
            </h1>
            <div className="flex flex-col justify-center items-center lg:justify-between lg:flex-row mx-auto mt-16">
                <div className="max-w-sm">
                    <Image src={profilePicture} className="rounded-md" />
                </div>
                <div className="lg:max-w-md xl:max-w-2xl mt-12">
                    <h1 className="text-4xl font-extrabold text-center">About me</h1>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 text-center mx-auto">
                        {" "}
                        Software engineer, full-stack developer{" "}
                    </p>
                    <p className="mt-4 text-gray-600 mt-8 text-justify">
                        {" "}
                        I am Toni, currently a software engineer student and freelancer full-stack developer. During my
                        years of experience, I've worked in many different fields ranging from videogame development to
                        full-stack programming. This upcoming year I'll be graduating from university and I'm currently
                        looking for the next challenge to develop my software engineer career to its fullest potential.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default About;
