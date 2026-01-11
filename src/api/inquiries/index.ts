import {httpClient} from "@/api";
import {EditInquiryPayload, InquiriesResponse,InquiryFilters} from "@/api/inquiries/index.type";

export const getInquiries = (filters?:InquiryFilters) => {
    const params = new URLSearchParams();
    if(filters?.client){
        params.append('client',filters.client);
    };
    if(filters?.minValue){
        params.append("minValue",filters.minValue.toString());
    }
    if(filters?.to){
        params.append("to",filters.to);
    }
    if(filters?.from){
        params.append("from",filters.from);
    }

    const queryString = params.toString();
    const url = `/inquiries${queryString ? `?${queryString}` : ''}`

    return httpClient.get<InquiriesResponse[]>(url).then((res)=>res.data);
};

export const editInquiries = (Id:string,payload:EditInquiryPayload) => {
    return httpClient.patch(`/inquiries/${Id}`,payload).then((res)=>res.data);
};