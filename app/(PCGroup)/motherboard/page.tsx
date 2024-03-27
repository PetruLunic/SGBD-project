import MotherboardModel from "@/app/_lib/models/Motheboard";
import {Motherboard} from "@/app/types";
import MotherboardTable from "@/app/(PCGroup)/motherboard/MotherboardTable";

export default async function Page() {

  const motherboards: Motherboard[] = await MotherboardModel.find().lean();

 return (
  <div>
    <MotherboardTable motherboards={motherboards}/>
  </div>
 );
};