import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import classNames from "../utils/styles";
import profilePictureLogo from "../public/profile-picture-logo.jpg";

interface NavbarLinkProps {
    children: string;
    className?: string;
    href: string;
}

const NavbarLink = ({ children, className, href }: NavbarLinkProps) => {
    return (
        <Disclosure.Button>
            <Link href={href}>
                <a
                    className={classNames(
                        "flex justify-center items-center border-transparent h-8 text-center px-1 border-b-2 text-sm font-semibold hover:border-primary md:transition-all md:duration-300",
                        className
                    )}
                >
                    {children}
                </a>
            </Link>
        </Disclosure.Button>
    );
};

export default function Navbar() {
    return (
        <Disclosure as="nav" className="fixed top-0 left-0 z-50 w-full shadow-md bg-white">
            {({ open }) => (
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/">
                                    <a>
                                        <Image
                                            height={46}
                                            width={46}
                                            src={profilePictureLogo}
                                            alt="Render Props Logo"
                                            className="object-scale-down rounded-full"
                                        />
                                    </a>
                                </Link>
                                <p className="hidden lg:block lg:ml-8 h-8 w-auto text-2xl font-bold ml-4">Toni Realp</p>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                                <NavbarLink href="/#products">About</NavbarLink>
                                <NavbarLink href="/#technologies">My Projects</NavbarLink>
                                <NavbarLink
                                    href="/contact"
                                    className="bg-primary rounded-lg w-24 text-white hover:bg-primary-500 hover:!border-none"
                                >
                                    Contact
                                </NavbarLink>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:text-primary">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-300 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-300 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="flex sm:hidden rounded-lg sm:w-56 bg-gray-900 w-full p-2">
                            <div className="space-y-1 w-full flex flex-col items-center justify-center sm:items-start sm:text-left">
                                <NavbarLink href="/#products">Products</NavbarLink>
                                <NavbarLink href="/#technologies">Technologies</NavbarLink>
                                <NavbarLink href="/contact">Contact</NavbarLink>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    );
}
