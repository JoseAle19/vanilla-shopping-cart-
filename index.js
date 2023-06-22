import env from "dotenv";
import express from "express";
import paymnetRoutes from "./src/routes/payment.routes.js";
import productRoutes from "./src/routes/products.routes.js";
env.config();
import path from "path";

const app = express();
// Middleware
app.use(express.json());

app.use(paymnetRoutes);
app.use(productRoutes);

app.use(express.static(path.resolve("src/public")));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
