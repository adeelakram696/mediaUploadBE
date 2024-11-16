import db from '../../../models';

const { File } = db;
export const editMediaService = async ({ id, filename, userId }) => {
  const file = await File.findOne({ where: { id, userId } });
  if (!file) {
    throw new Error('File not found');
  }

  file.filename = filename || file.filename;
  await file.save();
  return file;
};
