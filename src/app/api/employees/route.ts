import { dbQuery } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	try {
		const res = await dbQuery("SELECT * FROM Employee;");
		if (res === null) {
			throw new Error("Database query returned null");
		}
		return NextResponse.json({ res });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "An error occurred" },
			{ status: 500 }
		);
	}
}
