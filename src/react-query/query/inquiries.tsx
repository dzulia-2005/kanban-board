"use client"
import {useQuery} from "@tanstack/react-query";
import {getInquiries} from "@/api/inquiries";
import {InquiryFilters} from "@/api/inquiries/index.type";

export const useGetAllInquiryQuery = (filters?:InquiryFilters) => {
    return useQuery({
        queryFn:()=>getInquiries(filters),
        queryKey:["get-inquiries",filters]
    })
}