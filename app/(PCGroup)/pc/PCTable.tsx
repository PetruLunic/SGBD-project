"use client"

import {CPU, GPU, Motherboard, PC, RAM, Storage} from "@/app/types";
import {
  Button,
  getKeyValue,
  Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow, useDisclosure
} from "@nextui-org/react";
import {useState} from "react";
import CpuTable from "@/app/(PCGroup)/cpu/CPUTable";
import MotherboardTable from "@/app/(PCGroup)/motherboard/MotherboardTable";
import StorageTable from "@/app/(PCGroup)/storage/StorageTable";
import RamTable from "@/app/(PCGroup)/ram/RAMTable";
import GpuTable from "@/app/(PCGroup)/gpu/GPUTable";

interface Props{
  pcs: PC[]
}

const columns = [
  {
    key: "_id",
    name: "ID"
  },
  {
    key: "motherboard",
    name: "Motherboard"
  },
  {
    key: "cpu",
    name: "CPU"
  },
  {
    key: "gpu",
    name: "GPU"
  },
  {
    key: "ram",
    name: "RAM"
  },
  {
    key: "psu",
    name: "Power Supply"
  },
  {
    key: "storage",
    name: "Storage"
  },
  {
    key: "formFactor",
    name: "Form Factor"
  },
  {
    key: "color",
    name: "Color"
  },
]

const CPUModal = ({cpu}: {cpu: CPU}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
      <>
        <Button variant="light" onClick={() => onOpen()}>{cpu.name}</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="full" backdrop="blur">
          <ModalContent>
            {(onClose) => (
                <>
                  <ModalHeader>
                    CPU
                  </ModalHeader>
                  <ModalBody>
                    <CpuTable cpus={[cpu]}/>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose} color="primary">Close</Button>
                  </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}

const GPUModal = ({gpu}: {gpu: GPU}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
      <>
        <Button variant="light" onClick={() => onOpen()}>{gpu.name}</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="full" backdrop="blur">
          <ModalContent>
            {(onClose) => (
                <>
                  <ModalHeader>
                    GPU
                  </ModalHeader>
                  <ModalBody>
                    <GpuTable gpus={[gpu]}/>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose} color="primary">Close</Button>
                  </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}

const MotherboardModal = ({motherboard}: {motherboard: Motherboard}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
      <>
        <Button variant="light" onClick={() => onOpen()}>{motherboard.chipset}</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="full" backdrop="blur">
          <ModalContent>
            {(onClose) => (
                <>
                  <ModalHeader>
                    Motherboard
                  </ModalHeader>
                  <ModalBody>
                    <MotherboardTable motherboards={[motherboard]}/>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose} color="primary">Close</Button>
                  </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}

const StorageModal = ({storages}: {storages: Storage[]}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const capacity = storages.reduce((acc, {capacity}) => acc + capacity, 0)

  return (
      <>
        <Button variant="light" onClick={() => onOpen()}>{capacity} GB</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="full" backdrop="blur">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  Storage
                </ModalHeader>
                <ModalBody>
                  <StorageTable storages={storages}/>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose} color="primary">Close</Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}

const RAMModal = ({rams}: {rams: RAM[]}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const capacity = rams.reduce((acc, {capacity}) => acc + capacity, 0)

  return (
      <>
        <Button variant="light" onClick={() => onOpen()}>{capacity} GB</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="full" backdrop="blur">
          <ModalContent>
            {(onClose) => (
                <>
                  <ModalHeader>
                    RAM
                  </ModalHeader>
                  <ModalBody>
                    <RamTable rams={rams}/>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose} color="primary">Close</Button>
                  </ModalFooter>
                </>
            )}
          </ModalContent>
        </Modal>
      </>
  )
}

const renderCells = (item: any, columnKey: string) => {
  switch(columnKey) {
    case "cpu":
      return <CPUModal cpu={getKeyValue(item, columnKey)}/>

    case "motherboard":
      return <MotherboardModal motherboard={getKeyValue(item, columnKey)}/>

    case "storage":
      return <StorageModal storages={getKeyValue(item, columnKey)}/>

    case "ram":
      return <RAMModal rams={getKeyValue(item, columnKey)}/>

    case "gpu":
      return <GPUModal gpu={getKeyValue(item, columnKey)}/>

    default:
      return getKeyValue(item, columnKey);
  }
}

export default function PcTable({pcs}: Props) {

 return (
   <Table aria-label="GPU Table" isStriped>
     <TableHeader columns={columns}>
       {(column) => <TableColumn key={column.key}>{column.name}</TableColumn>}
     </TableHeader>
     <TableBody items={pcs} emptyContent="No pc found">
       {(item) => (
           <TableRow key={item._id}>
             {(columnKey) => <TableCell>{renderCells(item, columnKey as string)}</TableCell>}
           </TableRow>
       )}
     </TableBody>
   </Table>
 );
};