import axiosClient from './axiosClient';

const authApi = {
   getMeLocal: () => {
      const url = 'http://localhost:9000/api/user/me/local';
      return axiosClient.get(url);
   },

   createAccount: (data) => {
      const url = 'http://localhost:9000/api/user/create';
      return axiosClient.post(url, data);
   },
};

export default authApi;
