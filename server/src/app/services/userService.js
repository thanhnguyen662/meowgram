const { userRepo } = require('../repos');

const testUserService = () => {
   const getTestMessage = userRepo.testUserRepo();
   return getTestMessage;
};

const createUser = async ({ email, ...rest }) => {
   const findUser = await userRepo.findMe({ email });

   if (findUser) {
      return {
         message: 'user_already_exists',
      };
   }

   const create = userRepo.createUser({
      email,
      ...rest,
   });

   return create;
};

module.exports = {
   testUserService,
   createUser,
};
