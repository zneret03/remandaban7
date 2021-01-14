import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//*components
const Home = lazy(() => import("./page/Home"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
      </Suspense>
    </Router>
  );
};

export default App;
