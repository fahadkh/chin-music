import React from 'react';
import { ThemeProvider } from 'react-jss'
import './App.css';

import AppBar from './components/application/AppBar';
import Router from './components/application/Router';
import { theme } from './Theme'

const App: React.FC = () => {

  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar/>
        
        <main>
          <Router>
            Some cool content
          </Router>
        </main>
        
      </ThemeProvider>
    </div>

  );
}

export default App;
