import fs from 'fs';
import db from '../../../models';

const { File } = db;

export const deleteMediaService = async ({ id, userId }) => {
  const file = await File.findOne({ where: { id, userId } });

  if (!file) {
    throw new Error('File not found');
  }

  fs.unlinkSync(file.path);
  await file.destroy();
  return true;
};
