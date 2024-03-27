import StorageModel from "@/app/_lib/models/Storage";
import StorageTable from "@/app/(PCGroup)/storage/StorageTable";
import {Storage} from "@/app/types";
import {ParsedUrlQuery} from "querystring";
import {transformSearchParams} from "@/app/_lib/utils/transformSearchParams";

interface Props {
  searchParams: ParsedUrlQuery;
}

export default async function Page({searchParams}: Props) {
  const query = transformSearchParams(searchParams);

  const storages: Storage[] = await StorageModel.find(query).lean()

 return (
  <div>
    <StorageTable storages={storages}/>
  </div>
 );
};