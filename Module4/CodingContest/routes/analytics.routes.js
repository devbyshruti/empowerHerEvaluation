import express from "express";
import { readDB } from "../utils/db";

const router =  express.Router();

router.get("/allorders", async (req, res) => {
    const { orders } = await readDB();
    res.json({ count: orders.length, orders });
});

router.get("/cancelled-orders", async (req, res) => {
    const { orders } = await readDB();
    const cancelled = orders.filter(o => o.status === "cancellled");
    res.json({ count: shipped.length, shipped });
});

router.get("/shipped", async (req, res) => {
    const { orders } = await readDB();
     const shipped= orders.filter(o => o.status === "shipped");
    res.json({ count: shipped.length, orders });
});

