import express from "express";
import { readDb, writeDB } from "../utils/db";

const router = express.Router();

router.post ("/", async ( req, res) => {
    const { productId, quantity } = req.body;
    const db = await readDb();

    const product = db.products.find(p => p.id === productId);
    if(!product) {
        return res.status(404).json({ message: "Product not found"});
    }

       if(!product) {
        return res.status(400).json({ message: "Insufficient Stock" });
    }
    
})