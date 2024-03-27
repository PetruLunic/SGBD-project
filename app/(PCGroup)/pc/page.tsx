import PCModel from "@/app/_lib/models/PC";
import dbConnect from "@/app/_lib/utils/dbConnect";
import PcTable from "@/app/(PCGroup)/pc/PCTable";
import {PC} from "@/app/types";


export default async function Page() {
 await dbConnect();

 const pcs: PC[] = await PCModel.find().populate("storage cpu gpu ram motherboard").lean();

 return (
  <div>
   <PcTable pcs={pcs}/>
  </div>
 );
};