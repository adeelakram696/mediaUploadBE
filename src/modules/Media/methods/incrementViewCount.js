import db from '../../../models';

const { File } = db;

export const incrementViewCountService = async ({ id }) => {
    const media = await File.findByPk(id);
    if (!media) {
      throw new Error('File not found');
    }

    media.viewCount += 1;
    await media.save();
};
