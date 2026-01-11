import KanbanCard from "@/components/kanban/KanbanCard";


const KanbanColumn: React.FC = () => {

    return (
        <div
            className={`
                min-w-[280px] bg-gray-50 rounded-xl p-4 flex flex-col
                transition-all duration-300 ease-in-out
            `}
        >
            <div className="text-center mb-4 pb-3 border-b border-gray-200">
                <div className="font-bold text-lg text-gray-900">cdscsd</div>
                <p className="text-sm text-gray-600 mt-1">
                    1 inquiries • CHF 12333
                </p>
            </div>


                <div className="flex flex-col gap-3 min-h-[200px]">
                    <KanbanCard/>
                </div>
        </div>
    );
};

export default KanbanColumn;