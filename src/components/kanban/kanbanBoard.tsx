import KanbanColumn from "@/components/kanban/KanbanColumn";
import {useKanbanContext} from "@/context/hooks/useKanbanContext";

const phases = [
    { key: "New", label: "New" },
    { key: "sent_to_hotels", label: "Sent to Hotels" },
    { key: "offers_received", label: "Offers Received" },
    { key: "completed", label: "Completed" }
];

const KanbanBoard = () => {
    const {filters}=useKanbanContext();
    return (
        <section className="flex gap-4 overflow-x-auto">
            <KanbanColumn/>
        </section>
    )
}

export default KanbanBoard;