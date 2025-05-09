import multer from 'multer';
import path from 'path';
import { ResponseError } from '../error/response-error.js';

// Penyimpanan dengan nama unik
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueName = Date.now() + '-' + file.originalname;
      cb(null, uniqueName);
    }
  });
  
  // Filter: hanya PDF
  const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.pdf') {
      cb(null, true);
    } else {
      cb(new ResponseError(400, 'Hanya file PDF yang diperbolehkan'), false);
    }
  };
  
  // Batas ukuran file 2MB
  const limits = {
    fileSize: 2 * 1024 * 1024 // 2MB
  };
  
  // Inisialisasi multer
  const upload = multer({
    storage,
    fileFilter,
    limits
  });
  
  // Middleware upload tunggal dengan error handling sendiri
  export const uploadSinglePDF = (fieldName) => {
    return (req, res, next) => {
      const singleUpload = upload.single(fieldName);
  
      singleUpload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          // Error dari multer (misal file terlalu besar)
          return next(new ResponseError(400, err.message));
        } else if (err) {
          // Error dari custom fileFilter atau lainnya
          return next(err);
        }
        next(); // lanjut ke controller
      });
    };
  };
  
  