import dayjs from "dayjs";
import {useKanbanContext} from "@/context/hooks/useKanbanContext";
import {KanbanCardProps} from "./kanban.type";
import relativeTime from "dayjs/plugin/relativeTime";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

dayjs.extend(relativeTime);

export const KanbanCard:React.FC<KanbanCardProps> = ({inquiry}) => {
    const {setIsModalOpen,setSelectedInquiryId} = useKanbanContext();
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: inquiry.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const handleClick = (e:React.MouseEvent) => {
        e.stopPropagation();
        setIsModalOpen(true);
        setSelectedInquiryId(inquiry.id);
    };

    return (
        <div
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            style={style}
            className={`
                bg-white border rounded-lg p-3 shadow-sm 
                cursor-grab active:cursor-grabbing
                hover:shadow-md hover:scale-[1.02]
                transition-all duration-200 ease-in-out
                w-full max-w-[240px]
                ${isDragging ? 'ring-2 ring-blue-400 shadow-lg' : ''}
            `}
            onClick={handleClick}
        >
            <h3 className="font-semibold text-gray-900 mb-1">{inquiry?.clientName}</h3>
            <p className="text-sm text-gray-600 mb-2">
                {dayjs(inquiry.eventDate).fromNow()} • {inquiry?.guestCount} guests
            </p>

            <div className="flex justify-between items-center mt-2">
                {inquiry.potentialValue > 50000 && (
                    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 font-semibold">
                      High Value
                    </span>
                )}

                <span className="font-bold text-gray-900">
                  CHF {inquiry?.potentialValue.toLocaleString()}
                </span>
            </div>
        </div>
    )
}

export default KanbanCard;