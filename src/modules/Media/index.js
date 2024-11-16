import express from 'express';
import {
  uploadMedia,
  listMedia,
  viewMedia,
  readMedia,
  editMedia,
  deleteMedia,
  incrementViewCount,
  sharedToken,
} from './controller.js';
import { authenticateJWT } from '../../middleware/authMiddleware.js';
import { uploadMiddleWare } from '../../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/upload', authenticateJWT, uploadMiddleWare('file'), uploadMedia);
router.get('/', authenticateJWT, listMedia);
router.get('/:id', authenticateJWT, viewMedia);
router.get('/:id/file', authenticateJWT, readMedia);
router.put('/:id', authenticateJWT, editMedia);
router.delete('/:id', authenticateJWT, deleteMedia);
router.post('/:id/increment-view',authenticateJWT, incrementViewCount);
router.get('/shared/:token', sharedToken);
export default router;
