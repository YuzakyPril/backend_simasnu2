import { prismaClient } from "../application/database.js";

export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Akses ditolak' });
      }
  
      next();
    };
  };