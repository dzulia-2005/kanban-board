export type Filters = {
    clientName?:string;
    minValue?:number;
    to?:string|null;
    from?:string|null;
}

export type KanbanContextType = {
    selectedInquiryId:string|null;
    setSelectedInquiryId:(id:string|null) => void;
    isModalOpen:boolean;
    setIsModalOpen:(open:boolean) => void;
    filters:Filters;
    setFilters:(filters:Partial<Filters>)=>void
}