"use client"
import {useContext} from "react";
import {KanbanContext} from "@/context/kanbanContext";

export const useKanbanContext = () => {
    const context = useContext(KanbanContext);
    if(!context){
        throw new Error("useKanbanContext must be used within useKanbanContext");
    }
    return context;
}