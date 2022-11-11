import React, { createContext, useMemo } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../constants';
import PropTypes from 'prop-types';

export const AxiosContext = createContext(null);

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
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
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
