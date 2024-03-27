import GPUModel from "@/app/_lib/models/GPU";
import GpuTable from "@/app/(PCGroup)/gpu/GPUTable";
import {GPU} from "@/app/types";
import {ParsedUrlQuery} from "querystring";
import {transformSearchParams} from "@/app/_lib/utils/transformSearchParams";

interface Props {
  searchParams: ParsedUrlQuery;
}
export default async function Page({searchParams}: Props) {
  const query = transformSearchParams(searchParams);

 const gpus: GPU[] = await GPUModel.find(query).lean();

 return (
  <div>
    <GpuTable gpus={gpus}/>
  </div>
 );
};