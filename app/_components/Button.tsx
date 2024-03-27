"use client"

import {CPU, FormFactor, GPU, Motherboard, PCInput, RAM, Storage} from "@/app/types";

async function createCPU(cpu: CPU) {
  return fetch("/api", {
    method: "POST",
    body: JSON.stringify(cpu)
  })
}

async function createRAM(ram: RAM) {
  return fetch("/api", {
    method: "POST",
    body: JSON.stringify(ram)
  })
}

async function createMotherBoard(motherboard: Motherboard) {
  return fetch("/api", {
    method: "POST",
    body: JSON.stringify(motherboard)
  })
}

async function createGPU(gpu: GPU) {
  return fetch("/api", {
    method: "POST",
    body: JSON.stringify(gpu)
  })
}

async function createStorage(storage: Storage) {
  return fetch("/api", {
    method: "POST",
    body: JSON.stringify(storage)
  })
}

async function createPC(pc: PCInput) {
  return fetch("/api", {
    method: "POST",
    body: JSON.stringify(pc)
  })
}

export default function Button() {


 return (
   <button>
     Create CPU
   </button>
 );
};