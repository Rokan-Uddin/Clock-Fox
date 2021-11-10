import {
      BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddPackage from "./components/AddPackage/AddPackage";
import AllPlan from "./components/AllPlan/AllPlan";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyPackage from "./components/MyPackage/MyPackage";
import NotFound from "./components/NotFound/NotFound";
import PackageDetails from "./components/PackageDetails/PackageDetails";
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
                           <AddPackage></AddPackage>
                      </Route>
                      <Route path="/myorder">
                            <MyPackage></MyPackage>
                      </Route>
                      <Route path="/review">
                            <Review></Review>
                      </Route>
                      <Route path="/allorder">
                           <AllPlan></AllPlan>
                      </Route>
                      <Route path="/product/:packageID">
                            <PackageDetails></PackageDetails>
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
