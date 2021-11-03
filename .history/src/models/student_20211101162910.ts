export interface Student {
  id?: string;
  name: string;
  age: number;
  marks: number;
  gender: 'male' | 'female';
  city: string;
  createdAt?: string;
  updatedAt?: string;
}
