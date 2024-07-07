import { dbQuery } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Employee {
	name: string;
	department: string;
	title: string;
	email: string;
}
export async function PATCH(req: NextRequest) {
	try {
		const { email, title, name, department } = await req.json();

		const res = await dbQuery(
			"UPDATE Employee SET name = ?, title = ? , department = ? WHERE email = ?",
			[name, title, department, email]
		);
		return NextResponse.json(
			{ success: true, massage: "record updated successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error while inserting the record: ", error);
	}
}
