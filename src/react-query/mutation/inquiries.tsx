"use client"

import {useMutation} from "@tanstack/react-query";
import {editInquiries} from "@/api/inquiries";
import {EditInquiryPayload} from "@/api/inquiries/index.type";

export const useEditInquiryMutation = () => {
    return useMutation({
        mutationFn:({Id,payload}:{Id: string, payload: EditInquiryPayload})=>editInquiries(Id,payload),
        mutationKey:["edit-inquiry"],
    })
}