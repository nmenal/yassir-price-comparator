import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderLegacy } from '@mui/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';
import AxiosProvider from './contexts/axiosContext';
import { AuthProvider } from './contexts/authContext';
import Main from './pages/Main/Main';
import Login from './pages/Auth/Login';
import './App.css';

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
                <div className="App">
                  <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </div>
              </AuthProvider>
            </AxiosProvider>
          </ThemeProviderLegacy>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
