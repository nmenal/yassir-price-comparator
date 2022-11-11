import { useContext } from 'react';
import { AxiosContext } from '../contexts/axiosContext';

export function useAxios() {
  return useContext(AxiosContext);
}
