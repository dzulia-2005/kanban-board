

const InquiryModal = () => {


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 w-[420px] space-y-3">

                <h2 className="text-xl font-bold">
                    csdc
                </h2>

                <div className="text-sm text-gray-600">
                    Conference • 13/2/2005
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Guests: <b>csdc</b></div>
                    <div>Value: <b>CHF z</b></div>
                </div>

                <div>
                    <h3 className="font-semibold text-sm">Hotels</h3>
                    <ul className="list-disc ml-5 text-sm">

                                <li
                                >
                                    csdcsdc
                                </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-sm">Notes</h3>
                    <p className="text-sm text-gray-700">
                        csdcsdcsdc
                    </p>
                </div>

                <div>
                    <label className="text-sm font-semibold">Phase</label>
                    <select
                        className="border rounded w-full px-2 py-1 mt-1"
                    >
                        <option>New</option>
                        <option>sent_to_hotels</option>
                        <option>offers_received</option>
                        <option>completed</option>
                    </select>
                </div>

                <button
                    className="w-full bg-blue-600 text-white rounded py-1 mt-2"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default InquiryModal;