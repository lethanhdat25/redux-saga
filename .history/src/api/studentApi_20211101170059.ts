import { ListParams, ListResponse, Student } from 'models';
import axiosClient from './axiosClient';

const students = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return axiosClient.get(url, { params });
  },

  add(body: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.post(url, body);
  },

  update(body: Student): Promise<Student> {
    const url = '/students';
    return axiosClient.patch(url, body);
  },

  remove(id: string): Promise<ListResponse<any>> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};
export default students;
