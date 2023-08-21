import express from "express";
import cors from "cors";

import accountRoutes from "./routes/account";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/account", accountRoutes);

export default app;