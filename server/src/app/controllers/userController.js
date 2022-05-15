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
   const userInfo = req.getUserInfoByToken;

   try {
      const response = await userRepo.findMe({
         email: userInfo.email,
      });
      return res.json(response);
   } catch (error) {
      return next(error);
   }
};

const upsertUserLocal = async (req, res, next) => {
   try {
      const upsertUserResponse = await userRepo.upsertUser({ ...req.body });
      return res.json(upsertUserResponse);
   } catch (error) {
      return next(error);
   }
};

module.exports = {
   testUserController,
   findMeLocal,
   upsertUserLocal,
};
