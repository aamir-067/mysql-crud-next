import { dbQuery } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Employee {
	name: string;
	department: string;
	title: string;
	email: string;
}
export async function POST(req: NextRequest) {
	try {
		const { email, title, name, department } = await req.json();

		const res = await dbQuery(
			"INSERT INTO `Employee`(`email`, `name`, `title`, `department`) VALUES (?, ?, ?, ?)",
			[email, name, title, department]
		);
		return NextResponse.json(
			{ success: true, massage: "record inserted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.log("Error while inserting the record: ", error);
	}
}
