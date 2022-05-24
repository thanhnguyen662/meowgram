const prisma = require('../models/prisma');

const postModel = prisma.post;

const createPost = async ({ imageURLs, caption, uid }) => {
   const create = await postModel.create({
      data: {
         imageURLs,
         caption,
         userId: uid,
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
