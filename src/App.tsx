import "./App.css";

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "components/application/Login";
import ArticleContainer from "components/article/ArticleContainer";
import MainContainer from "components/main/MainContainer";
import routes from "routes/routeConfig";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={routes.home.getPath()} component={MainContainer} />
        <Route path={routes.article.getPath()} component={ArticleContainer} />
        <Route path={routes.login.getPath()} component={Login} />
        <Route
          path={routes.artist.getPath()}
          component={() => <div>Artist</div>}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
