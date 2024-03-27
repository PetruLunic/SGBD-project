import PCModel from "@/app/_lib/models/PC";
import dbConnect from "@/app/_lib/utils/dbConnect";
import PcTable from "@/app/(PCGroup)/pc/PCTable";
import {PC} from "@/app/types";
import {ParsedUrlQuery} from "querystring";
import {transformSearchParams} from "@/app/_lib/utils/transformSearchParams";

interface Props {
 searchParams: ParsedUrlQuery;
}
export default async function Page({searchParams}: Props) {
 const query = transformSearchParams(searchParams);
 await dbConnect();

 const pcs: PC[] = await PCModel.find(query).populate("storage cpu gpu ram motherboard").lean();

 return (
  <div>
   <PcTable pcs={pcs}/>
  </div>
 );
};