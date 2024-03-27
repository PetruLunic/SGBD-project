import MotherboardModel from "@/app/_lib/models/Motheboard";
import {Motherboard} from "@/app/types";
import MotherboardTable from "@/app/(PCGroup)/motherboard/MotherboardTable";
import {ParsedUrlQuery} from "querystring";
import {transformSearchParams} from "@/app/_lib/utils/transformSearchParams";

interface Props {
  searchParams: ParsedUrlQuery;
}
export default async function Page({searchParams}: Props) {
  const query = transformSearchParams(searchParams);

  const motherboards: Motherboard[] = await MotherboardModel.find(query).lean();

 return (
  <div>
    <MotherboardTable motherboards={motherboards}/>
  </div>
 );
};