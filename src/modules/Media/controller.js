import fs from 'fs';
import { UPLOAD_FOLDER } from '../../config/config';
import { addMediaService } from './methods/add';
import { listMediaService } from './methods/list';
import { readMediaService } from './methods/read';
import { editMediaService } from './methods/update';
import { deleteMediaService } from './methods/delete';
import { incrementViewCountService } from './methods/incrementViewCount';
import { viewFileByToken } from './methods/viewFileByToken';
import path from 'path';

if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER);
}

export const uploadMedia = async (req, res) => {
  try {
    const { filetype, tags } = req.body;
    const userId  = req.user.id;
    const file = req.file;
    const newFile = await addMediaService({ userId, filetype, file, tags});
    res.status(201).json({ message: 'File uploaded successfully', file: newFile });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const listMedia = async (req, res) => {
  try {
    const userId  = req.user.id;
    const files = await listMediaService({ userId });
    res.status(200).json(files);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const viewMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const userId  = req.user.id;
    const file = await readMediaService({id, userId});
    res.status(200).json({ message: 'File fetched successfully', file });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
export const readMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const userId  = req.user.id;
    const file = await readMediaService({id, userId});
    res.download(file.path, file.filename);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
export const editMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.body;
    const userId  = req.user.id;

    const file = await editMediaService({ id, filename, userId });
    res.status(200).json({ message: 'File updated successfully', file });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const userId  = req.user.id;
    await deleteMediaService({ id, userId });
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export const incrementViewCount = async (req, res) => {
  try {
    const { id } = req.params;
    await incrementViewCountService({id});
    res.json({ message: 'View count updated successfully' });
  } catch (error) {
    console.error('Error updating view count:', error);
    res.status(401).json({ message: err.message });
  }
}
export const sharedToken = async (req, res) => {
  try {
    const { token } = req.params;
    const file = await viewFileByToken({token});
    res.download(file.path, file.filename);
  } catch (error) {
    console.error('Error serving shared file:', error);
    res.status(500).json({ message: 'Failed to serve shared file' });
  }
};
