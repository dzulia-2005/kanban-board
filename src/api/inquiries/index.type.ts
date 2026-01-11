export type InquiryPhase =
    | "New"
    | 'sent_to_hotels'
    | 'offers_received'
    | 'completed';

export type InquiriesResponse = {
    id:string;
    clientName: string;
    contactPerson: string;
    eventType: string;
    eventDate: string;
    guestCount: number;
    potentialValue: number;
    phase: InquiryPhase;
    hotels: string[],
    notes: string;
    createdAt: string;
    updatedAt: string;
}

export type EditInquiryPayload = {
    phase:InquiryPhase
}

export type InquiryFilters = {
    client:string;
    minValue:number;
    to:string;
    from:string;
}