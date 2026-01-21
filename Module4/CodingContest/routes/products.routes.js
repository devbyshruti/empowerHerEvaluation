import express from "express";
import { readDB, writeDB } from "../utils/db.js";

const router = express.Router();

router.post("/", async (requestAnimationFrame, res) => {
    const db = await readDB();
    const newProduct = { id: Date.now(), ...req.body };

    db.products.push(newProduct);
    await writeDB(db);

    res.status(201).json(newProduct);
});

router.get("/", async (req, res) => {
    const db = await readDB();
    res.json(db.products);
});

export default router;