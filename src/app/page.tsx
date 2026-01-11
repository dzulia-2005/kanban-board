"use client"

import FilterHeader from "@/components/filters/filterHeader";
import InquiryModal from "@/components/kanban/inquiryModal";
import KanbanBoard from "@/components/kanban/kanbanBoard";

const Home = () => {
    return(
        <main className="p-4 space-y-4">
            <FilterHeader/>
            <KanbanBoard/>
            <InquiryModal/>
        </main>
    )
}

export default Home;