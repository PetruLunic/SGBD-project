"use client"

import {CPU} from "@/app/types";
import {getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import {Key} from "react";

interface Props{
  cpus: CPU[]
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
    key: "cores",
    name: "Cores"
  },
  {
    key: "threads",
    name: "Threads"
  },
  {
    key: "hyperthreading",
    name: "Hyperthreading"
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
    key: "socket",
    name: "Socket"
  },
  {
    key: "chipset",
    name: "Chipset"
  },
  {
    key: "cache",
    name: "Cache (MB)"
  },
  {
    key: "maxRam",
    name: "Maximum RAM (GB)"
  },
]

const renderCell = (item: any) => {
  console.log(typeof item)
  if (typeof item === "object") {
    return (
        <Table isCompact removeWrapper>
          <TableHeader columns={Object.keys(item).map(el => ({name: el}))}>
            {(column) => <TableColumn key={column.name}>{column.name}</TableColumn>}
          </TableHeader>
          <TableBody items={Object.values(item).map(el => ({name: el as string}))}>
              <TableRow key={item.name}>
                {(columnKey) => <TableCell>
                  {getKeyValue(item, columnKey)}
                </TableCell>}
              </TableRow>
          </TableBody>
        </Table>
    )
  } else if (typeof item === "boolean") {
    return item ? "true" : "false"
  } else {
    return item;
  }
}

export default function CpuTable({cpus}: Props) {

 return (
     <Table aria-label="CPUs" isStriped>
       <TableHeader columns={columns}>
         {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
       </TableHeader>
       <TableBody items={cpus}>
         {(item) => (
             <TableRow key={item._id}>
               {(columnKey) => <TableCell>{renderCell(getKeyValue(item, columnKey))}</TableCell>}
             </TableRow>
         )}
       </TableBody>
     </Table>
 );
};