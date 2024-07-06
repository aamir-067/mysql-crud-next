import mysql, { ConnectionOptions } from "mysql2";

export const dbQuery = async (
	query: string,
	params: Array<string | number> = []
) => {
	try {
		if (!query) {
			throw new Error("Query string is required.");
		}
		const options: ConnectionOptions = {
			host: process.env.DATABASE_HOST,
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
		};

		const connection = mysql.createConnection(options).promise();

		if (!connection) {
			throw new Error("Failed to create database connection.");
		}

		const res = await connection.query(query, params);

		if (!res) {
			throw new Error("Failed to execute database query.");
		}

		return res[0];
	} catch (error) {
		throw new Error("Error while executing the sql query:");
	}
};
