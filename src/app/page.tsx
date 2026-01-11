import KanbanColumn from "@/components/kanban/KanbanColumn";

const Home = () => {
    return(
        <main className="p-4 space-y-4">
            <section className="flex flex-wrap gap-2 items-center bg-white p-3 rounded shadow">
                <input
                    placeholder="clientName"
                    className="border rounded w-40 py-1 px-2"
                />
                <input
                    type="number"
                    placeholder="Min CHF"
                    className="border rounded px-2 py-1 w-28"
                />

                <input
                    type="date"
                    className="border rounded px-2 py-1"
                />
                <input
                    type="date"
                    className="border rounded px-2 py-1"
                />
                <span className="text-sm text-gray-500 ml-auto">
                 Active filters: 0
            </span>

                <button
                    className="text-sm text-red-600"
                >
                    Clear filters
                </button>
            </section>

            <section className="flex gap-4 overflow-x-auto">
                    <KanbanColumn/>
            </section>

        </main>
    )
}

export default Home;