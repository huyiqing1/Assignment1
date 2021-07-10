import Header from "./Header";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./Footer";
import Signup from "../pages/Signup";

function App() {
  return (
    <div className="App bg-secondary">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
