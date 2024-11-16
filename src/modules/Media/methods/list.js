import db from '../../../models';

const { File, Tag } = db;
export const listMediaService = async ({ userId }) => {
  const files = await File.findAll(
    { 
      where: { userId },
      include: [
        {
          model: Tag,
          attributes: ['tag'],
        },
      ],
    },
  );
  return files;
};
