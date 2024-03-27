import RAMModel from "@/app/_lib/models/RAM";
import RamTable from "@/app/(PCGroup)/ram/RAMTable";
import {RAM} from "@/app/types";


export default async function Page() {
 const rams: RAM[] = await RAMModel.find().lean();

 return (
  <div>
    <RamTable rams={rams}/>
  </div>
 );
};