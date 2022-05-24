import axiosClient from './axiosClient';

const authApi = {
   getMeLocal: () => {
      const url = '/user/me/local';
      return axiosClient.get(url);
   },

   createAccount: (data) => {
      const url = '/user/create';
      return axiosClient.post(url, data);
   },
};

export default authApi;
