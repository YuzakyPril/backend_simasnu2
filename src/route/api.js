import express from 'express';
import userController from '../controller/user-controller.js';
import { authMiddleware } from '../middleware/auth-middleware.js';
import { uploadSinglePDF } from '../middleware/upload-middleware.js';
import dkmController from '../controller/dkm-controller.js';

const userRouter = new express.Router();
userRouter.use(authMiddleware)

//Admin
userRouter.get("/api/admin/profile", userController.getAdmin)
userRouter.put("/api/admin/profile", userController.updateAdmin)

// Manage DKM by Admin
userRouter.post("/api/admin/takmirs", uploadSinglePDF("sk_masjid"), dkmController.createTakmirUser)
userRouter.put("/api/admin/takmirs/:takmirId", uploadSinglePDF("sk_masjid"), dkmController.updateTakmirUser)
userRouter.patch("/api/admin/takmirs/:takmirId/status/:status", dkmController.updateStatusUser)
userRouter.get("/api/admin/takmirs", dkmController.searchTakmir)
userRouter.get("/api/admin/takmirs/:takmirId", dkmController.getTakmirUser)
userRouter.delete("/api/admin/takmirs/:takmirId", dkmController.deleteTakmirUser)

//DKM
userRouter.get("/api/takmir/profile", userController.getTakmir)
userRouter.put("/api/takmir/profile", userController.updateTakmir)

//logout
userRouter.post("/api/logout", userController.logout)

export {
    userRouter
}