import dbConnect from "@/app/_lib/utils/dbConnect";
import RAMModel from "@/app/_lib/models/PC";
import {NextResponse} from "next/server";


export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const newCPU = new RAMModel(body);
  await newCPU.save();

  return NextResponse.json(newCPU);
}