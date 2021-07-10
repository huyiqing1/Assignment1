import Header from "./Header";
import Home from "../pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from "./Footer";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

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
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
