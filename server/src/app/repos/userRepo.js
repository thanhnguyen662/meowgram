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

const upsertUser = async ({ email, name, photoURL = null }) => {
   const create = await userModel.upsert({
      where: {
         email,
      },
      update: {
         email,
         name,
         photoURL,
      },
      create: {
         email,
         name,
         photoURL,
      },
   });

   return create;
};

module.exports = {
   testUserRepo,
   findMe,
   upsertUser,
};
