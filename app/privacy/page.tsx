import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Footer from '../components/Footer'

const privacyContent = [
    {
        title: "Information Collection",
        content: "“Tasker” does not collect any personal information from its users. We do not collect, store, or have access to the task data entered by the user, as this data is stored on the user’s iCloud account and is not accessible by the developer."
    },
    {
        title: "Data Storage and Sharing",
        content: "The task data entered by the user is stored on the user’s iCloud account and is only accessible by the user across their own devices using iCloud sync. The developer does not have access to this data."
    },
    {
        title: "Security",
        content: "While we do not have access to user data, we take reasonable measures to protect the security and privacy of the App and its functionality."
    },
    {
        title: "Cookies",
        content: "“Tasker” does not use cookies or similar tracking technologies."
    },
    {
        title: "Third-Party Links",
        content: "The App may contain links to third-party websites. We are not responsible for their privacy practices."
    },
    {
        title: "Children's Privacy",
        content: "Tasker is not intended for children under the age of 13."
    },
    {
        title: "Changes to Privacy Policy",
        content: "Any updates to our Privacy Policy will be communicated through the App."
    },
    {
        title: "Contact Information",
        content: "If you have questions or concerns, please contact us at jacobgambrell@gmail.com."
    },
]

export default function Privacy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">Tasker</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            { privacyContent.map((content) => (
                <li key={content.title} className="flex gap-x-3">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                        <strong className="font-semibold text-gray-900">{content.title}:</strong> {content.content}
                    </span>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
