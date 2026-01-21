import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

const dbPath = path.join(__dirname, "./db.json");
export const readDb = async () => {
    const data = await fs.readFile(dbPath, "utf-8");
    return JSON.parse(data);
}

export const writeDB = async (data) => {
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2))
}
