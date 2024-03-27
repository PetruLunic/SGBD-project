import RAMModel from "@/app/_lib/models/RAM";
import RamTable from "@/app/(PCGroup)/ram/RAMTable";
import {RAM} from "@/app/types";
import {ParsedUrlQuery} from "querystring";
import {transformSearchParams} from "@/app/_lib/utils/transformSearchParams";

interface Props {
  searchParams: ParsedUrlQuery;
}
export default async function Page({searchParams}: Props) {
  const query = transformSearchParams(searchParams);

  const rams: RAM[] = await RAMModel.find(query).lean();

 return (
  <div>
    <RamTable rams={rams}/>
  </div>
 );
};