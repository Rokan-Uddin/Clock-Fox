import {
      BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddProduct from "./components/AddProduct/AddProduct";
import AllPlan from "./components/AllPlan/AllPlan";
import Dashboard from "./components/Dashboard/Dashboard";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyProduct from "./components/MyProduct/MyProduct";
import NotFound from "./components/NotFound/NotFound";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Review from "./components/Review/Review";
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
                      <Route path="/explore">
                           <Explore></Explore>
                      </Route>

                      <Route path="/login">
                           <Login></Login>
                      </Route>
                      <Route path="/add">
                           <AddProduct></AddProduct>
                      </Route>
                      <Route path="/myorder">
                            <MyProduct></MyProduct>
                      </Route>
                      <Route path="/review">
                            <Review></Review>
                      </Route>
                      <Route path="/dashboard">
                            <Dashboard></Dashboard>
                      </Route>
                      <Route path="/allorder">
                           <AllPlan></AllPlan>
                      </Route>
                      <PrivateRoute path="/product/:packageID">
                            <PackageDetails></PackageDetails>
                      </PrivateRoute>

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
