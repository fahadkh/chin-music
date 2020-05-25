import React from "react";
import { ThemeProvider } from "react-jss";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Routes from "./components/application/Routes";
import { theme } from "./components/application/Theme";

import MainContainer from "./components/main/MainContainer";
import ArticleContainer from "./components/article/ArticleContainer";
import SearchContainer from "./components/search/SearchContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Route exact path={Routes.home.getPath()} component={MainContainer} />
          <Route path="/search" component={SearchContainer} />
          <Route path={Routes.article.getPath()} component={ArticleContainer} />
          <Route
            path={Routes.artist.getPath()}
            component={() => <div>Artist</div>}
          />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
