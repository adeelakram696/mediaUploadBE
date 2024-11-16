import multer from 'multer';
import path from 'path';
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE, UPLOAD_FOLDER } from '../config/config';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${UPLOAD_FOLDER}/`);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  if (ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and MP4 files are allowed.'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_FILE_SIZE },
});

export const uploadMiddleWare = (fieldName) => upload.single(fieldName);
