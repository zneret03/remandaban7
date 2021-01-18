import React, { Suspense, lazy, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import { Logo } from "./components/icon";
import { GlobalProvider } from "./Context/GlobalProvider";

//*components
const Home = lazy(() => import("./page/Home"));
const Projects = lazy(() => import("./page/Projects"));
const Story = lazy(() => import("./page/Story"));

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Fragment>
        <GlobalStyle />
        <Router>
          <Suspense
            fallback={
              <div className="logo">
                <Logo />
              </div>
            }
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/project" component={Projects} />
            <Route exact path="/story" component={Story} />
          </Suspense>
        </Router>
      </Fragment>
    </GlobalProvider>
  );
};

export default App;
