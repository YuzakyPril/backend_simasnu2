import express from "express";
import userController from "../controller/user-controller.js";
// import { authorizeRoles } from "../middleware/role-middleware.js";

const publicRouter = new express.Router();
publicRouter.post('/api/register', userController.register)
publicRouter.post('/api/admin/login', userController.loginAdmin)
publicRouter.post('/api/login', userController.loginTakmir)


export {
    publicRouter
}