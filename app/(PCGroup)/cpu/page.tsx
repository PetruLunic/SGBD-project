import CPUModel from "@/app/_lib/models/CPU";
import CpuTable from "@/app/(PCGroup)/cpu/CPUTable";
import {CPU} from "@/app/types";


export default async function Page() {
 const cpus: CPU[] = await CPUModel.find().lean();

 return (
  <div>
    <CpuTable cpus={cpus}/>
  </div>
 );
};