
export enum FormFactor {
  "E-ATX" = "E-ATX",
  ATX = "ATX",
  miniATX = "miniITX",
  microATX = "microATX"
}

export interface Motherboard {
  name: string,
  chipset: string,
  socket: string,
  bios: string,
  manufacture: string,
  sataSlots: number,
  maxRam: number,
  ramSlots: number,
  formFactor: FormFactor,
  _id?: string
}

export enum CPUManufacture {
  AMD = "AMD",
  Intel = "Intel"
}

export interface CPU {
  socket: string,
  chipset: string,
  frequency: number,
  cores: number,
  threads: number,
  hyperthreading: boolean,
  manufacture: CPUManufacture,
  cache: {
    l1: number,
    l2: number,
    l3: number
  },
  name: string,
  maxRam: number,
  _id?: string
}

export enum GPUManufacture {
  AMD = "AMD",
  Intel = "Intel",
  Nvidia = "Nvidia"
}

export interface GPU {
  cudaCores: number,
  frequency: number,
  manufacture: GPUManufacture,
  gram: number,
  type: string,
  name: string,
  _id?: string
}

export enum RAMType {
  DDR1 = "DDR1",
  DDR2 = "DDR2",
  DDR3 = "DDR3",
  DDR4 = "DDR4",
  DDR5 = "DDR5"
}

export interface RAM {
  capacity: number,
  frequency: number,
  manufacture: string,
  name: string,
  type: RAMType,
  _id?: string
}

export enum StorageType {
  SSD = "SSD",
  HDD = "HDD"
}

export interface Storage {
  type: StorageType,
  capacity: number,
  readSpeed: number,
  writeSpeed: number,
  _id?: string
}

export interface PC {
  motherboard: Motherboard,
  cpu: CPU,
  gpu: GPU,
  ram: RAM[],
  psu: string,
  storage: Storage[],
  formFactor: FormFactor,
  color: string,
  _id?: string
}

export interface PCInput {
  motherboard: string,
  cpu: string,
  gpu: string,
  ram: string[],
  psu: string,
  storage: string[],
  formFactor: FormFactor,
  color: string,
  _id?: string
}