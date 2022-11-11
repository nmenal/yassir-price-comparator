import React, { createContext, useMemo } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';
import PropTypes from 'prop-types';

export const AxiosContext = createContext(null);


// const hardCodedToken = 
//   'iOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrMjEzNzc1OTg2MTAzIiwiaWF0IjoxNjM4NDU0OTUxLCJleHAiOjE2NDYyMzA5NTEsInR5cGUiOiJZQV9HT19DT01QQU5ZIn0.8tSon9W3sqHkawP1-9Xh7ZsX6hOFnxQSZBuEEvX_ivk';
const propTypes = {
  children: PropTypes.string.node,
};

const AxiosProvider= ({
  children,
}) => {
  const customAxios = useMemo(() => {
    const clientAxios = axios.create({
      baseURL: SERVER_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    clientAxios.interceptors.request.use((config) => {
      // const token = hardCodedToken;
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log({ config })
      return config;
    });

    return clientAxios;
  }, []);

  return (
    <AxiosContext.Provider value={customAxios}>
      {children}
    </AxiosContext.Provider>
  );
};

AxiosProvider.propTypes = propTypes;

export default AxiosProvider;
