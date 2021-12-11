import { NextPage } from "next";
import Image from "next/image";
import profilePicture from "../public/profile-picture.jpg";

const About: NextPage = () => {
    return (
        <div className="mt-32 flex w-full justify-center">
            <div className="flex flex-col w-full max-w-7xl justify-center items-center lg:justify-between lg:flex-row">
                <div className="max-w-md">
                    <Image src={profilePicture} className="rounded-md" />
                </div>
                <div className="lg:max-w-md xl:max-w-2xl">
                    <h1 className="text-4xl font-extrabold text-center">About me</h1>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 text-center">
                        {" "}
                        Software engineer, full-stack developer{" "}
                    </p>
                    <p className="mt-4 text-gray-600 mt-8">
                        {" "}
                        I am Toni currently a software engineer student and freelancer full-stack developer. During my
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
