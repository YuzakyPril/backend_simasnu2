// src/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { ResponseError } from '../error/response-error.js';

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ResponseError(401, 'Token tidak ditemukan atau format salah');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // berisi id, username, role, dll
    next();
  } catch (error) {
    throw new ResponseError(401, 'Token tidak valid');
  }
};
