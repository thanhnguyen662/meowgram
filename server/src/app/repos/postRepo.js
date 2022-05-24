const prisma = require('../models/prisma');

const postModel = prisma.post;

const createPost = async ({ imageURLs, caption, userId }) => {
   const create = await postModel.create({
      data: {
         imageURLs,
         caption,
         userId,
      },
      include: {
         user: true,
      },
   });

   return create;
};

module.exports = {
   createPost,
};
