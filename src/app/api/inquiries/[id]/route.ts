import {Delay} from "@/lib/delay";
import {InquiryPhase} from "@/mockData/inquiriesData.type";
import {Inquiries} from "@/mockData/inquiriesData";
import {NextResponse} from "next/server";

export async function PATCH(
    req:Request,
    {params}:{params:{id:string}}
    ){

    await Delay();

    const body = await req.json();
    const {phase} = body as {phase:InquiryPhase};

    const inquiry =  Inquiries.find(i=>i.id===params.id);
    if(!inquiry){
        return NextResponse.json(
            {messages:"inquiries not found"},
            {status:404}
        )
    }


    inquiry.phase=phase;
    inquiry.updatedAt=new Date().toISOString();

    return NextResponse.json(inquiry);
}