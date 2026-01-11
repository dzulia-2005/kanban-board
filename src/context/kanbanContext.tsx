"use client"
import {createContext, ReactNode, useState} from "react";
import {Filters, KanbanContextType} from "@/context/kanbanContext.type";

export const KanbanContext = createContext<KanbanContextType|undefined>(undefined);

export const KanbanProvider = ({children}:{children:ReactNode}) => {
    const [selectedInquiryId,setSelectedInquiryId]=useState<string|null>(null);
    const [isModalOpen,setIsModalOpen]=useState<boolean>(false);
    const [filters,setFilters]=useState<Filters>({
        clientName:'',
        minValue:0,
        to:null,
        from:null
    });

    return (
        <KanbanContext.Provider
            value={{
                selectedInquiryId,
                setSelectedInquiryId,
                isModalOpen,
                setIsModalOpen,
                filters,
                setFilters
            }}
        >
            {children}
        </KanbanContext.Provider>
    )
}