import axiosClient from './axiosClient';

const authApi = {
   getMeLocal: () => {
      const url = 'http://localhost:9000/api/user/me/local';
      return axiosClient.get(url);
   },

   upsertAccount: (data) => {
      const url = 'http://localhost:9000/api/user/upsert';
      return axiosClient.post(url, data);
   },
};

export default authApi;
