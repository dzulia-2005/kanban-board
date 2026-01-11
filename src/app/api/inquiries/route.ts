import {Delay} from "@/lib/delay";
import {Inquiries} from "@/mockData/inquiriesData";
import {NextResponse} from "next/server";

export async function GET(req:Request){
    await Delay();

    const {searchParams}=new URL(req.url);
    const client = searchParams.get("client");
    const minValue=searchParams.get("minValue");
    const from = searchParams.get("from");
    const to = searchParams.get("to");


    let result =[...Inquiries];

    if(client){
        result = result.filter((i)=>{
            return i.clientName.toLowerCase().includes(client.toLowerCase());
        })
    }

    if(minValue){
        result=result.filter((i)=>i.potentialValue>=Number(minValue));
    }

    if(to){
        result=result.filter((i)=>i.eventDate<=to);
    }

    if(from){
        result=result.filter((i)=>i.eventDate>=from);
    }

    return NextResponse.json(result);
}