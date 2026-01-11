"use client"
import {ReactNode} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/lib/queryClient";
import {KanbanProvider} from "@/context/kanbanContext";

export function Providers({children}:{children:ReactNode}){
    return (
        <QueryClientProvider client={queryClient}>
            <KanbanProvider>
                {children}
            </KanbanProvider>
        </QueryClientProvider>
    )
}