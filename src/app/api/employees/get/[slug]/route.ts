import { dbQuery } from "@/lib/db";
import { QueryResult } from "mysql2";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: { slug: string } }
) {
	console.log(params);

	try {
		const res = await dbQuery("SELECT * FROM Employee WHERE email = ?", [
			params.slug,
		]);
		if (res === null) {
			throw new Error("Database query returned null");
		}
		return NextResponse.json({ res: res });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "An error occurred" },
			{ status: 500 }
		);
	}
}
