import express from "express";

import productRoutes from "./routes/products.routes";
import orderRoutes from "./routes/orders.routes";
import analyticsRoutes from "./routes/analytics.routes";

const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/analytics", analyticsRoutes);

app.listen(3000, () => {
    console.log("Server is running om port 3000")
})