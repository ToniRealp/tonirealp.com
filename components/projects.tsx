import { NextPage } from "next";

const posts = [
    {
        title: "Pocket Todo: An everyday simple todo app",
        href: "https://play.google.com/store/apps/details?id=com.pocket.todo",
        category: { name: "App", href: "#" },
        description:
            "To-do list app that actually makes you productive. Built with with a couple of friends with technologies like React, Capacitor and Firebase, were I took part as a full-stack developer",
        imageUrl: "/pocket-todo.png",
    },
    {
        title: "Hidreco",
        href: "https://www.hidreco.es/",
        category: { name: "Landing page", href: "#" },
        description: "Landing page for a water purification company from Valencia built with next.js and tailwind.",
        imageUrl: "/hidreco.png",
    },
    {
        title: "Sons of God: Redemption",
        href: "https://tonirealp.itch.io/sons-of-god-redemption",
        category: { name: "3D videogame", href: "#" },
        description:
            "3D action videogame developed in my second year of university at ENTI, this project was developed with unity in a team of 4, where I took part as project manager and CTO.",
        imageUrl: "/sons-of-god.png",
    },
];

const Projects: NextPage = () => (
    <div id="projects" className="relative pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8 lg:mt-8">
        <div className="absolute inset-0">
            <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">My projects</h2>
                <p className="mt-3 mx-auto max-w-2xl text-xl text-gray-500 sm:mt-4">
                    Take a look at my projects. This is some of the work that I've been proud to take part in.
                </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                    <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-shrink-0">
                            <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">
                                    <a href={post.category.href} className="hover:underline">
                                        {post.category.name}
                                    </a>
                                </p>
                                <a href={post.href} className="block mt-2">
                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Projects;
