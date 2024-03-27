import GPUModel from "@/app/_lib/models/GPU";
import GpuTable from "@/app/(PCGroup)/gpu/GPUTable";
import {GPU} from "@/app/types";


export default async function Page() {
 const gpus: GPU[] = await GPUModel.find().lean();

 return (
  <div>
    <GpuTable gpus={gpus}/>
  </div>
 );
};