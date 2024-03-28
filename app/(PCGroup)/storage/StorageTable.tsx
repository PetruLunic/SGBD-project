"use client"

import {Storage} from "@/app/types";
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

interface Props{
  storages: Storage[]
}

const columns = [
  {
    key: "_id",
    name: "ID"
  },
  {
    key: "capacity",
    name: "Capacity"
  },
  {
    key: "readSpeed",
    name: "Read speed"
  },
  {
    key: "writeSpeed",
    name: "Write Speed"
  },
  {
    key: "type",
    name: "Type"
  },
]

export default function StorageTable({storages}: Props) {

 return (
     <Table aria-label="GPU Table" isStriped>
       <TableHeader columns={columns}>
         {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
       </TableHeader>
       <TableBody items={storages} emptyContent="No storage found">
         {(item) => (
             <TableRow key={item._id}>
               {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
             </TableRow>
         )}
       </TableBody>
     </Table>
 );
};