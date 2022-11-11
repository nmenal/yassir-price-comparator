import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderLegacy } from '@mui/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';
import AxiosProvider from './contexts/axiosContext';
import { AuthProvider } from './contexts/authContext';
import { ProductsProvider } from './contexts/productsContext';
import Main from './pages/Main/Main';
import Login from './pages/Auth/Login';
import { useAuthData } from './contexts/authContext';
import PropTypes from 'prop-types';

import './App.css';
const propTypes = {
  Component: PropTypes.node,
};
const PrivateRoute = ({ Component }) => {
  const { isTokenValid } = useAuthData();
  return isTokenValid ? <Component /> : <Navigate to="/login" />;
};
PrivateRoute.propTypes = propTypes;

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider theme={theme}>
          <ThemeProviderLegacy theme={theme}>
            <AxiosProvider>
              <AuthProvider>
                <ProductsProvider>
                  <div className="App">
                    <Routes>
                      <Route path="/" element={<Login />} />
                      <Route
                        path="/home"
                        element={<PrivateRoute Component={Main} />}
                      />
                      <Route path="/login" element={<Login />} />
                    </Routes>
                  </div>
                </ProductsProvider>
              </AuthProvider>
            </AxiosProvider>
          </ThemeProviderLegacy>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
