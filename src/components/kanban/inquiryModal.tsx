import {useGetAllInquiryQuery} from "@/react-query/query/inquiries";
import {useKanbanContext} from "@/context/hooks/useKanbanContext";
import {useEditInquiryMutation} from "@/react-query/mutation/inquiries";
import {InquiryPhase} from "@/api/inquiries/index.type";
import {useQueryClient} from "@tanstack/react-query";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { showErrorMessage } from "../../../utils/message";


dayjs.extend(relativeTime);

const InquiryModal = () => {
    const {selectedInquiryId,isModalOpen,setIsModalOpen} = useKanbanContext();
    const {data:inquiries } = useGetAllInquiryQuery();
    const inquiry = inquiries?.find(i=>i.id===selectedInquiryId);
    const totalValue = inquiries?.reduce((sum,i)=>sum+i.potentialValue,0)
    const {mutate:EditInquiry} = useEditInquiryMutation();
    const queryClient = useQueryClient();


    const handleEditInquiry = (newPhase: string) => {
        if(!selectedInquiryId) return;
        EditInquiry(
            {
                Id:selectedInquiryId,
                payload:{phase:newPhase as InquiryPhase}
            },
            {
                onSuccess:()=>{
                    setIsModalOpen(false);
                    queryClient.invalidateQueries({
                        queryKey:["get-inquiries"],
                    });
                },
                onError:(err)=>{
                    showErrorMessage(err);
                }

            }
        );
    }

    if(!inquiry||!isModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-4 w-[420px] space-y-3">

                <h2 className="text-xl font-bold">
                    {inquiry?.clientName}
                </h2>

                <div className="text-sm text-gray-600">
                    Conference • {dayjs(inquiry.eventDate).fromNow()}
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Guests: <b>{inquiry.guestCount}</b></div>
                    <div>Value: <b>CHF {totalValue}</b></div>
                </div>

                <div>
                    <h3 className="font-semibold text-sm">Hotels</h3>
                    <ul className="list-disc ml-5 text-sm">
                        {
                            inquiry.hotels.map(i=>
                                <li
                                    key={i}
                                >
                                    {i}
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-sm">Notes</h3>
                    <p className="text-sm text-gray-700">
                        {inquiry.notes}
                    </p>
                </div>

                <div>
                    <label className="text-sm font-semibold">Phase</label>
                    <select
                        className="border rounded w-full px-2 py-1 mt-1"
                        value={inquiry.phase}
                        onChange={(e)=>handleEditInquiry(e.target.value as InquiryPhase)}
                    >
                        <option>New</option>
                        <option>sent_to_hotels</option>
                        <option>offers_received</option>
                        <option>completed</option>
                    </select>
                </div>

                <button
                    className="w-full bg-blue-600 text-white rounded py-1 mt-2"
                    onClick={()=>setIsModalOpen(false)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default InquiryModal;