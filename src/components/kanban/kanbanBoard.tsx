"use client";

import KanbanColumn from "@/components/kanban/kanbanColumn";
import { useGetAllInquiryQuery } from "@/react-query/query/inquiries";
import {useKanbanContext} from "@/context/hooks/useKanbanContext";
import {InquiryFilters, InquiryPhase} from "@/api/inquiries/index.type";

import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    closestCorners
} from "@dnd-kit/core";
import {useEditInquiryMutation} from "@/react-query/mutation/inquiries";
import {useQueryClient} from "@tanstack/react-query";
import { useState } from "react";
import KanbanCard from "@/components/kanban/kanbanCard";
import {showErrorMessage} from "../../../utils/message";
import {Spinner} from "@/components/spinner";

const phases = [
    { key: "New", label: "New" },
    { key: "sent_to_hotels", label: "Sent to Hotels" },
    { key: "offers_received", label: "Offers Received" },
    { key: "completed", label: "Completed" }
];

const KanbanBoard = () => {
    const {filters} = useKanbanContext();
    const queryClient=useQueryClient();
    const [activeId, setActiveId] = useState<string | null>(null);

    const inquiryFilters: InquiryFilters = {
        client: filters.clientName || "",
        minValue: filters.minValue || 0,
        from: filters.from || "",
        to: filters.to || ""
    };

    const { data: inquiries ,isLoading} = useGetAllInquiryQuery(inquiryFilters);
    const {mutate:EditInquiry}=useEditInquiryMutation();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    if(isLoading){
        return (<Spinner/>)
    }

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        const InquiryId = active.id as string;

        let newPhase: string;

        const overInquiry = inquiries?.find(i => i.id === over.id);
        if (overInquiry) {
            newPhase = overInquiry.phase;
        } else {
            newPhase = over.id as string;
        }

        const draggedInquiry = inquiries?.find(i => i.id === InquiryId);

        if (!draggedInquiry) return;
        if (draggedInquiry.phase === newPhase) return;

        EditInquiry({
            Id: InquiryId,
            payload: {
                phase: newPhase as InquiryPhase
            }
        }, {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["get-inquiries"]
                })
            },
            onError:(err)=>{
                showErrorMessage(err);
            }
        })
    };

    const activeInquiry = inquiries?.find(i => i.id === activeId);

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <section className="flex gap-4 overflow-x-auto">
                {phases.map((phase) => (
                    <KanbanColumn
                        key={phase.key}
                        title={phase.label}
                        inquiries={inquiries?.filter((i) => i.phase === phase.key) || []}
                        phaseKey={phase.key}
                    />
                ))}
            </section>

            <DragOverlay>
                {activeInquiry ? (
                    <div className="rotate-3 scale-105 opacity-90">
                        <KanbanCard inquiry={activeInquiry} />
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};

export default KanbanBoard;