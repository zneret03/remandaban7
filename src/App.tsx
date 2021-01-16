import React, { Suspense, lazy, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
//*components
const Home = lazy(() => import("./page/Home"));
const Panel = lazy(() => import("./page/Panel"));
const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/panel" component={Panel} />
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default App;
