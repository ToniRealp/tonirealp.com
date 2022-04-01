import { useForm } from "@formspree/react";
import { Transition } from "@headlessui/react";
import useHasIntersected from "../hooks/use-has-intersected";
import {useRef} from "react";

interface ContactSectionProps {
    aboutHasLoaded: boolean
}

const ContactSection = ({aboutHasLoaded}:ContactSectionProps) => {
    const [state, handleSubmit] = useForm("mbjwjwdb");
    const ref = useRef(null)
    const intersected = useHasIntersected(ref, aboutHasLoaded)

    if (state.succeeded) {
        return (
            <div id="contact">
                <div className="max-w-3xl mx-auto px-4 py-8 sm:pb-28 sm:pt-40 sm:px-6 lg:px-8 ">
                    <div className="relative bg-white rounded-lg shadow-lg">
                        <h2 className="sr-only">Get in touch</h2>
                        <div className="grid grid-cols-1 rounded-lg">
                            {/* Contact information */}
                            <div className="relative rounded-lg overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
                                <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                    <svg
                                        className="absolute inset-0 w-full h-full"
                                        width={343}
                                        height={388}
                                        viewBox="0 0 343 388"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                            fill="url(#linear1)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear1"
                                                x1="254.553"
                                                y1="107.554"
                                                x2="961.66"
                                                y2="814.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div
                                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="absolute inset-0 w-full h-full"
                                        width={359}
                                        height={339}
                                        viewBox="0 0 359 339"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                            fill="url(#linear2)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear2"
                                                x1="192.553"
                                                y1="28.553"
                                                x2="899.66"
                                                y2="735.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div
                                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="absolute inset-0 w-full h-full"
                                        width={160}
                                        height={678}
                                        viewBox="0 0 160 678"
                                        fill="none"
                                        preserveAspectRatio="xMidYMid slice"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                            fill="url(#linear3)"
                                            fillOpacity=".1"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="linear3"
                                                x1="192.553"
                                                y1="325.553"
                                                x2="899.66"
                                                y2="1032.66"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className="text-lg text-3xl font-bold text-white">Get in touch</h3>
                                <p className="mt-6 text-lg text-indigo-50 max-w-3xl">
                                    Feel free to contact me, I am a pretty friendly guy 😁.
                                </p>
                            </div>

                            {/* Contact form */}
                            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                <p className="text-xl font-semibold text-gray-900">
                                    Thanks for your submission, I'll get back to you soon!{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div ref={ref}>
            <Transition
                id="contact"
                show={intersected}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                className="max-w-3xl mx-auto py-8 px-4 sm:pb-28 sm:pt-40 sm:px-6 lg:px-8 ">
                <div className="relative bg-white rounded-lg shadow-lg">
                    <h2 className="sr-only">Get in touch</h2>
                    <div className="grid grid-cols-1 rounded-lg">
                        {/* Contact information */}
                        <div className="relative rounded-lg overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
                            <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    width={343}
                                    height={388}
                                    viewBox="0 0 343 388"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                        fill="url(#linear1)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear1"
                                            x1="254.553"
                                            y1="107.554"
                                            x2="961.66"
                                            y2="814.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    width={359}
                                    height={339}
                                    viewBox="0 0 359 339"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                        fill="url(#linear2)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear2"
                                            x1="192.553"
                                            y1="28.553"
                                            x2="899.66"
                                            y2="735.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div
                                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                aria-hidden="true"
                            >
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    width={160}
                                    height={678}
                                    viewBox="0 0 160 678"
                                    fill="none"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                        fill="url(#linear3)"
                                        fillOpacity=".1"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="linear3"
                                            x1="192.553"
                                            y1="325.553"
                                            x2="899.66"
                                            y2="1032.66"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#fff" />
                                            <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="text-lg text-3xl font-bold text-white">Get in touch</h3>
                            <p className="mt-6 text-lg text-indigo-50 max-w-3xl">
                                Feel free to contact me, I am a pretty friendly guy 😁.
                            </p>
                        </div>

                        {/* Contact form */}
                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <form
                                onSubmit={handleSubmit}
                                method="POST"
                                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            >
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                        Subject
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                            Message
                                        </label>
                                        <span id="message-max" className="text-sm text-gray-500">
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                            aria-describedby="message-max"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                    <button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto disabled:opacity-10"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
};

export default ContactSection;
