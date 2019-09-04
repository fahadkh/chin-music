import React from 'react';
import { ThemeProvider } from 'react-jss'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

import MainContainer from './components/main/MainContainer';
import SearchContainer from './components/search/SearchContainer';
import { theme } from './components/application/Theme'

const App: React.FC = () => {

  return (

    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>

            <Route exact path="/" component={MainContainer} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/rankings" component={(_: any) => <div>rankings</div>} />
            <Route path="/review/:id" component={(_: any) => <div>review</div>} />
        
        </ThemeProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
