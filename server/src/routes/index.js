const userRoute = require('./userRoute');
const postRoute = require('./postRoute');

const route = (app) => {
   app.use('/api/user', userRoute);
   app.use('/api/post', postRoute);
};

module.exports = route;
