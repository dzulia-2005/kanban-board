import React from "react";


export const KanbanCard:React.FC = () => {

    return (
        <div
            className={`
                bg-white border rounded-lg p-3 shadow-sm 
                cursor-grab active:cursor-grabbing
                hover:shadow-md hover:scale-[1.02]
                transition-all duration-200 ease-in-out
                w-full max-w-[240px]
            `}
        >
            <h3 className="font-semibold text-gray-900 mb-1">csd</h3>
            <p className="text-sm text-gray-600 mb-2">
                13/2/2003 • 2 guests
            </p>

            <div className="flex justify-between items-center mt-2">
                    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold">
                      High Value
                    </span>


                <span className="font-bold text-gray-900">
                  CHF 1233
                </span>
            </div>
        </div>
    )
}

export default KanbanCard;