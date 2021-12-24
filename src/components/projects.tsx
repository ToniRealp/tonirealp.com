import { Transition } from "@headlessui/react";
import { Project } from "../utils/types";
import classNames from "../utils/styles";
import useHasIntersected from "../hooks/use-has-intersected";
import * as React from "react";

interface ProjectsPageProps {
    projects: Array<Project>;
}

const Projects = ({ projects }: ProjectsPageProps) => {
    const intersectionReference = React.useRef(null);
    const hasIntersected = useHasIntersected(intersectionReference);
    console.log(hasIntersected);
    return (
        <div id="projects" className="relative px-4 pt-12 sm:px-6 lg:px-8 lg:pt-40">
            <div className="absolute inset-0">
                <div className=" h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto" ref={intersectionReference}>
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">My projects</h2>
                    <p className="mt-3 mx-auto max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Take a look at my projects. This is some of the work that I've been proud to take part in.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                    {projects.map((project, index) => (
                        <Transition
                            show={hasIntersected}
                            enter="transition-opacity duration-1000"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            key={project.title}
                            className={classNames(
                                "flex flex-col rounded-lg shadow-lg overflow-hidden",
                                `delay-${index * 500}`
                            )}
                        >
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={project.cover.url} alt="" />
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={"#"} className="hover:underline">
                                            {project.tag}
                                        </a>
                                    </p>
                                    <a href={project.url} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{project.description}</p>
                                    </a>
                                </div>
                            </div>
                        </Transition>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
