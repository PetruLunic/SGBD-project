import StorageModel from "@/app/_lib/models/Storage";
import StorageTable from "@/app/(PCGroup)/storage/StorageTable";
import {Storage} from "@/app/types";

export default async function Page() {
  const storages: Storage[] = await StorageModel.find().lean()

 return (
  <div>
    <StorageTable storages={storages}/>
  </div>
 );
};