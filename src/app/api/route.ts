import { dbQuery } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const res = await dbQuery("SELECT * FROM Students;");

	console.log(res);

	return NextResponse.json({ res });
}
