import React from 'react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/solid';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-base leading-7 text-gray-700 text-justify">
                <p className="text-base font-semibold leading-7 text-sky-300">Inhale for WatchOS</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>

                <p className="mt-6 text-xl leading-8">This Privacy Policy governs the manner in which Inhale for WatchOS collects, uses, maintains, and discloses information collected from users of the app. This Privacy Policy applies to the app and all products and services offered by it.</p>

                <div className="mt-10 max-w-2xl">
                    <h2 className="text-xl font-semibold">Personal Information Collection and Usage</h2>
                    <p className="mb-4">Inhale for WatchOS does not collect any personal information from users. The app utilizes watch sensors to measure heart rate, and this data remains on the user's device at all times and is not transmitted or stored externally.</p>

                    <h2 className="text-xl font-semibold mt-6">Protection of User Data</h2>
                    <p className="mb-4">Any data collected, such as heart rate measurements using watch sensors, is securely stored on the user's device and is not shared with any third parties.</p>

                    <h2 className="text-xl font-semibold mt-6">Data Retention and Deletion</h2>
                    <p className="mb-4">As no user data is stored externally, there are no data retention policies in place. Heart rate measurements taken during app use remain on the user's device until deleted by the user.</p>

                    <h2 className="text-xl font-semibold mt-6">Opt-Out and Data Deletion</h2>
                    <p className="mb-4">Users are not required to opt-out of data collection as no data is collected externally. Users can delete any heart rate measurements taken during app usage directly on their device.</p>

                    <h2 className="text-xl font-semibold mt-6">Children's Privacy</h2>
                    <p className="mb-4">Inhale for WatchOS is not intended for children under the age of 13. The app does not knowingly collect personal information from children.</p>

                    <h2 className="text-xl font-semibold mt-6">Contact Information</h2>
                    <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:tonirealp@gmail.com" className="text-indigo-600">tonirealp@gmail.com</a>.</p>

                    <p className="mt-6">This Privacy Policy was last updated on 29/06/2024.</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
