import { NextApiResponse, NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
	return Response.json({ test: "passed" });
}
