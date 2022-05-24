const prisma = require('../models/prisma');

const userModel = prisma.user;

const testUserRepo = () => {
   const getData = {
      message: 'OK',
   };

   return getData;
};

const findMe = async ({ email }) => {
   const find = await userModel.findUnique({
      where: {
         email,
      },
   });

   return find;
};

const createUser = async ({ email, name, username, photoURL = null }) => {
   const create = await userModel.create({
      data: {
         email,
         name,
         photoURL,
         username,
      },
   });

   return create;
};

module.exports = {
   testUserRepo,
   findMe,
   createUser,
};
