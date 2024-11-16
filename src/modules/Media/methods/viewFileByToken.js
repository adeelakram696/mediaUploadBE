import db from '../../../models';

const { File } = db;
export const viewFileByToken = async ({ token }) => {
    const file = await File.findOne({ where: { shareableToken: token } });

    if (!file) {
      return res.status(404).json({ message: 'Invalid or expired link' });
    }
  return file;
};
