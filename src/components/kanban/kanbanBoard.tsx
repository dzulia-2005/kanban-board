import KanbanColumn from "@/components/kanban/KanbanColumn";

const KanbanBoard = () => {
    return (
        <section className="flex gap-4 overflow-x-auto">
            <KanbanColumn/>
        </section>
    )
}

export default KanbanBoard;