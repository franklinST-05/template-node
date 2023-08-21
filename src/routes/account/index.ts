import { Router } from "express";
import { CreateAccountRoute } from "./CreateAccountRoute";

const accountRoutes = Router();
const createAccountRoute = new CreateAccountRoute();

accountRoutes.post("/", createAccountRoute.handle);

export default accountRoutes;