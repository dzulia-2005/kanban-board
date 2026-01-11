import {InquiriesResponse} from "@/api/inquiries/index.type";

export type KanbanCardProps = {
    inquiry:InquiriesResponse
}

export type KanbanColumnProps = {
    title: string;
    inquiries: InquiriesResponse[];
    phaseKey: string;
};
