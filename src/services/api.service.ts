import axios from 'axios';
import type ICar from '../models/ICar.ts';

export const axiosInstance = axios.create({
  baseURL: 'http://owu.linkpc.net/carsAPI/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

// INTERCEPTOR EXAMPLE
// axiosInstance.interceptors.request.use((request) => {
//   // request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   console.log(request);
//   request.headers.set('EXAMPLE', 'EXAMPLE');
//   return request;
// });

export const getCars = async (): Promise<ICar[]> => {
  const response = await axiosInstance.get<ICar[]>('/cars');

  return response.data;
};

export const createCar = async (car: ICar): Promise<ICar> => {
  return await axiosInstance.post('/cars', car);
};
