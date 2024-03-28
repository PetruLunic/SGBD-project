"use client"

import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {GPU} from "@/app/types";

interface Props{
  gpus: GPU[]
}

const columns = [
  {
    key: "_id",
    name: "ID"
  },
  {
    key: "name",
    name: "Name"
  },
  {
    key: "cudaCores",
    name: "Cuda Cores"
  },
  {
    key: "frequency",
    name: "Frequency (MHz)"
  },
  {
    key: "manufacture",
    name: "Manufacture"
  },
  {
    key: "gram",
    name: "GRAM (GB)"
  },
  {
    key: "type",
    name: "Type"
  },
]

export default function GpuTable({gpus}: Props) {

 return (
   <Table aria-label="GPU Table" isStriped>
     <TableHeader columns={columns}>
       {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
     </TableHeader>
     <TableBody items={gpus} emptyContent="No GPU found">
       {(item) => (
           <TableRow key={item._id}>
             {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
           </TableRow>
       )}
     </TableBody>
   </Table>
 );
};