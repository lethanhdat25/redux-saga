import axiosClient from './axiosClient';

const students = {
  getAll() {
    const url = '/students';
    return axiosClient.get(url);
  },
};
export default students;
