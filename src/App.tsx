import "./App.css";

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Routes from "./components/application/Routes";
import ArticleContainer from "./components/article/ArticleContainer";
import MainContainer from "./components/main/MainContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={Routes.home.getPath()} component={MainContainer} />
        <Route path={Routes.article.getPath()} component={ArticleContainer} />
        <Route
          path={Routes.artist.getPath()}
          component={() => <div>Artist</div>}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
