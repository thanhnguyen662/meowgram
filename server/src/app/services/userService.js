const { userRepo } = require('../repos');

const testUserService = () => {
   const getTestMessage = userRepo.testUserRepo();
   return getTestMessage;
};

module.exports = {
   testUserService,
};
