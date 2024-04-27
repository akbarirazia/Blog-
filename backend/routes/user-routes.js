import express from "express";
import { getAllUser, login, signup } from "../controller/user-controller.js";

const router = express.Router();
// Route definitions using the router object
router.get("/users", getAllUser);
router.post("/login", login);
router.post("/signup", signup);

export default router;
