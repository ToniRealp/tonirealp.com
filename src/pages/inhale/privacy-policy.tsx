import React from 'react';
import {InformationCircleIcon} from '@heroicons/react/solid';
import type {GetStaticProps, NextPage} from "next";
import Navbar from "../../components/navbar";
import getData from "../../utils/data";


interface PrivacyPolicyProps {
    profilePicture: string;
    curriculum: string;
}

const PrivacyPolicy: NextPage<PrivacyPolicyProps> = ({profilePicture, curriculum}) => {
    const today = "2024-06-29"

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <Navbar logo={profilePicture} curriculum={curriculum} transitionDelay={200}/>
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 text-justify">
                <p className="text-base font-semibold leading-7 text-indigo-600">Privacy Policy for Inhale for
                    WatchOS</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Inhale Privacy
                    Policy</h1>

                <div className="mt-6 max-w-2xl">
                    <div className="flex items-center mb-2">
                        <h2 className="text-xl font-semibold">Personal Information Collection and Usage</h2>
                    </div>
                    <p><InformationCircleIcon className="h-5 w-5 inline-block text-indigo-600 mr-2"/>Inhale for WatchOS
                        does not collect any personal information from users. The app utilizes watch sensors to measure
                        heart rate, and this data remains on the user's device at all times and is not transmitted or
                        stored externally.</p>

                    <div className="flex items-center mt-6 mb-2">
                        <h2 className="text-xl font-semibold">Protection of User Data</h2>
                    </div>
                    <p><InformationCircleIcon className="h-5 w-5 inline-block text-indigo-600 mr-2"/>Any data collected,
                        such as heart rate measurements using watch sensors, is securely stored on the user's device and
                        is not shared with any third parties.</p>

                    <div className="flex items-center mt-6 mb-2">
                        <h2 className="text-xl font-semibold">Data Retention and Deletion</h2>
                    </div>
                    <p><InformationCircleIcon className="h-5 w-5 inline-block text-indigo-600 mr-2"/>As no user data is
                        stored externally, there are no data retention policies in place. Heart rate measurements taken
                        during app use remain on the user's device until deleted by the user.</p>

                    <div className="flex items-center mt-6 mb-2">
                        <h2 className="text-xl font-semibold">Opt-Out and Data Deletion</h2>
                    </div>
                    <p><InformationCircleIcon className="h-5 w-5 inline-block text-indigo-600 mr-2"/>Users are not
                        required to opt-out of data collection as no data is collected externally. Users can delete any
                        heart rate measurements taken during app usage directly on their device.</p>

                    <div className="flex items-center mt-6 mb-2">
                        <h2 className="text-xl font-semibold">Children's Privacy</h2>
                    </div>
                    <p><InformationCircleIcon className="h-5 w-5 inline-block text-indigo-600 mr-2"/>Inhale for WatchOS
                        is not intended for children under the age of 13. The app does not knowingly collect personal
                        information from children.</p>

                    <div className="flex items-center mt-6 mb-2">
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                    </div>
                    <p><InformationCircleIcon className="h-5 w-5 inline-block text-indigo-600 mr-2"/>If you have any
                        questions about this Privacy Policy, please contact us at <a href="mailto:tonirealp@gmail.com"
                                                                                     className="text-indigo-600">tonirealp@gmail.com</a>.
                    </p>

                    <p className="mt-6 font-bold">This Privacy Policy was last updated on {today}.</p>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async () => {
    const {profilePicture, curriculum} = await getData();
    return {
        props: {
            profilePicture,
            curriculum,
        },
    };
};

export default PrivacyPolicy;
