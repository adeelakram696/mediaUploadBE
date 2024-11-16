import db from '../../../models';

const { File, Tag } = db;
export const readMediaService = async ({ id, userId }) => {
  const file = await File.findOne({
    where: { id, userId },
    include: [
      {
        model: Tag,
        attributes: ['tag'],
      },
    ],
   });

  if (!file) {
    throw new Error('File not found');
  }
  return file;
};
