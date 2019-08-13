import React from 'react';
import { ThemeProvider } from 'react-jss'
import './App.css';

import AppBar from './components/application/AppBar';
import { theme } from './Theme'

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar/>
        <div>
          Some cool content
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
