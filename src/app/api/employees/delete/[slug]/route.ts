import { dbQuery } from "@/lib/db";
import { QueryResult } from "mysql2";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { slug: string } }
) {
	try {
		// ... Your database query using `slug` here ...
		await dbQuery("DELETE FROM Employee WHERE email = ?", [params.slug]);

		return NextResponse.json(
			{
				success: true,
				message: "Record deleted successfully",
				// Remove email: req.url, as it doesn't provide the slug
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		console.log("Error while deleting record:", error);
		return NextResponse.json(
			{ success: false, message: "Error deleting record" },
			{ status: 500 } // Internal server error code
		);
	}
}
