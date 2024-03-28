"use client"

import {RAM} from "@/app/types";
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

interface Props{
  rams: RAM[]
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
    key: "frequency",
    name: "Frequency"
  },
  {
    key: "manufacture",
    name: "Manufacture"
  },
  {
    key: "name",
    name: "Name"
  },
  {
    key: "type",
    name: "Type"
  },
]

export default function RamTable({rams}: Props) {

 return (
     <Table aria-label="GPU Table" isStriped>
       <TableHeader columns={columns}>
         {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
       </TableHeader>
       <TableBody items={rams} emptyContent="No RAM found">
         {(item) => (
             <TableRow key={item._id}>
               {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
             </TableRow>
         )}
       </TableBody>
     </Table>
 );
};