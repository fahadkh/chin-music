import React from 'react';
import { ThemeProvider } from 'react-jss'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import AppBar from './components/application/AppBar';
import MainContainer from './components/main/MainContainer';
import { theme } from './Theme'

const App: React.FC = () => {

  return (

    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>

          <header>
            <AppBar/>
          </header>

          <main>
            <Route exact path="/" component={MainContainer} />
            <Route path="/search" component={(_: any) => <div>search</div>} />
            <Route path="/rankings" component={(_: any) => <div>rankings</div>} />
            <Route path="/review/:id" component={(_: any) => <div>review</div>} />
          </main>
        
        </ThemeProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
