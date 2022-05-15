const { userService } = require('../services');

const testUserController = (req, res, next) => {
   try {
      const dataByUserService = userService.testUserService();
      return res.json(dataByUserService);
   } catch (error) {
      return next(error);
   }
};

module.exports = {
   testUserController,
};
