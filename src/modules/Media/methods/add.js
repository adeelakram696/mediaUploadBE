import path from 'path';
import db from '../../../models';
import { UPLOAD_FOLDER } from '../../../config/config';
import { v4 as uuidv4} from 'uuid';

const { File, Tag } = db;

export const addMediaService = async ({ userId, filetype, file, tags }) => {
    if (!file) {
      throw new Error('No file uploaded');
    }

    const filePath = path.join(UPLOAD_FOLDER, file.filename);
    const shareableToken = uuidv4();
    const newFile = await File.create({
      userId,
      filename: file.originalname,
      filetype,
      path: filePath,
      viewCount: 0,
      shareableToken,
    });
    let createdTags = [];
    if (tags) {
      const tagArray = tags.split(',').map((tag) => tag.trim());
      const tagPromises = tagArray.map((tagName) =>
        Tag.create({
          tag: tagName,
          fileId: newFile.id,
        })
      );
      createdTags = await Promise.all(tagPromises);
    }
    return {
      ...newFile,
      tags: createdTags.map((tag) => tag.tag),
    };
};
