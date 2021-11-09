import {
      BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
           <AuthProvider>
             <Router>
                <Header></Header>
                <Switch>
                      <Route exact path="/">
                           <Home></Home>
                      </Route>
                      <Route path="/home">
                           <Home></Home>
                      </Route>

                      <Route path="/login">
                           <Login></Login>
                      </Route>

                      <Route path="/register">
                            <Register></Register>
                      </Route>
                      <Route path="*">
                            <NotFound></NotFound>
                      </Route>
                </Switch>
                <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
