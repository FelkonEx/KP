import { Router } from "express";
import { colourRoutes } from "./colourRoutes";

export const routes = Router();

routes.use("/colour", colourRoutes);
