const { userRepo } = require('../repos');
const { userService } = require('../services');

const testUserController = (req, res, next) => {
   try {
      const dataByUserService = userService.testUserService();
      return res.json(dataByUserService);
   } catch (error) {
      return next(error);
   }
};

const findMeLocal = async (req, res, next) => {
   try {
      const userInfo = req.getUserInfoByToken;
      const response = await userRepo.findMe({
         email: userInfo.email,
      });
      return res.json(response);
   } catch (error) {
      return next(error);
   }
};

const createUserLocal = async (req, res, next) => {
   try {
      const createUserResponse = await userService.createUser({ ...req.body });
      return res.json(createUserResponse);
   } catch (error) {
      return next(error);
   }
};

module.exports = {
   testUserController,
   findMeLocal,
   createUserLocal,
};
