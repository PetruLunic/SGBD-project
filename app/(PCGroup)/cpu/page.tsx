import CPUModel from "@/app/_lib/models/CPU";
import CpuTable from "@/app/(PCGroup)/cpu/CPUTable";
import {CPU} from "@/app/types";
import {GetServerSideProps} from "next";
import {ParsedUrlQuery} from "querystring";
import {transformSearchParams} from "@/app/_lib/utils/transformSearchParams";

interface Props {
  searchParams: ParsedUrlQuery;
}

export default async function Page({searchParams}: Props) {
  const query = transformSearchParams(searchParams);
 const cpus: CPU[] = await CPUModel.find(query).lean();

 return (
  <div>
    <CpuTable cpus={cpus}/>
  </div>
 );
};