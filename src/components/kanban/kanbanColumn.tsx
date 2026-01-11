import KanbanCard from "./kanbanCard";
import React from "react";
import { KanbanColumnProps } from "./kanban.type";
import { useDroppable } from "@dnd-kit/core";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, inquiries, phaseKey }) => {
    const totalValue = inquiries.reduce((sum, i) => sum + i.potentialValue, 0);

    const {setNodeRef, isOver} = useDroppable({
        id: phaseKey
    });

    return (
        <div
            ref={setNodeRef}
            className={`
                min-w-[280px] bg-gray-50 rounded-xl p-4 flex flex-col
                transition-all duration-300 ease-in-out
                ${isOver ? 'bg-blue-50 ring-2 ring-blue-300 shadow-lg scale-[1.02]' : 'shadow'}
            `}
        >
            <div className="text-center mb-4 pb-3 border-b border-gray-200">
                <div className="font-bold text-lg text-gray-900">{title}</div>
                <p className="text-sm text-gray-600 mt-1">
                    {inquiries.length} inquiries • CHF {totalValue.toLocaleString()}
                </p>
            </div>

            <SortableContext
                items={inquiries.map(i=>i.id)}
                strategy={verticalListSortingStrategy}
            >
                <div className="flex flex-col gap-3 min-h-[200px]">
                    {inquiries.map((i) => (
                        <KanbanCard key={i.id} inquiry={i} />
                    ))}
                </div>
            </SortableContext>
        </div>
    );
};

export default KanbanColumn;