import axios, { AxiosResponse } from 'axios';
import { configuration } from '../../utils/configuration';

export const axiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  withCredentials: false,
});

// export axios

// axiosInstance.interceptors.request.use((config: any) => {
//   const token = window.localStorage.getItem('token')!;
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export type ResourceSearch = {
  count: number;
  next: string;
  prevous: string;
  results: any[];
};

class HTTP {
  baseApi = async () => {
    const { data } = await axiosInstance.get(``);
    return data;
  };
  baseRouteApi = async (route: any) => {
    const { data } = await axiosInstance.get<
      any,
      AxiosResponse<ResourceSearch>
    >(`/${route}`, {});
    return data;
  };
  noBaseApi = async (url: string) => {
    const { data } = await axiosInstance.get(url, { baseURL: '' });
    return data;
  };
}

export const http = new HTTP();
