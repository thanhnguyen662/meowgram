const userRoute = require('./userRoute');

const route = (app) => {
   app.use('/api/user', userRoute);
};

module.exports = route;
