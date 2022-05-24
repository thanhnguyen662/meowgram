import axiosClient from './axiosClient';

const postApi = {
   create: (data) => {
      const url = '/post/create';
      return axiosClient.post(url, data);
   },
};

export default postApi;
