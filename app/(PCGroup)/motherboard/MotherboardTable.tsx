"use client"

import {Motherboard} from "@/app/types";
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";

interface Props{
  motherboards: Motherboard[]
}

export default function MotherboardTable({motherboards}: Props) {

  const columns = Object.keys(motherboards[0]).map(key => ({name: key}));

 return (
     <Table aria-label="Motherboards" isStriped>
       <TableHeader columns={columns}>
         {(column) => <TableColumn key={column.name}>{column.name}</TableColumn>}
       </TableHeader>
       <TableBody items={motherboards}>
         {(item) => (
             <TableRow key={item._id}>
               {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
             </TableRow>
         )}
       </TableBody>
     </Table>
 );
};