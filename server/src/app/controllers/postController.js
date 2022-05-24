const { postRepo } = require('../repos');

const createPost = async (req, res, next) => {
   try {
      const userInfo = req.getUserInfoByToken;
      const createNewPost = await postRepo.createPost({
         ...req.body,
         ...userInfo,
      });

      return res.status(200).json(createNewPost);
   } catch (error) {
      return next(error);
   }
};

module.exports = {
   createPost,
};
