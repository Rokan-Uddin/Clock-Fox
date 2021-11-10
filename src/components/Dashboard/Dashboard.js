import React from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddPackage from '../AddPackage/AddPackage';
import AllPlan from '../AllPlan/AllPlan';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyPackage from '../MyPackage/MyPackage';
import Review from '../Review/Review';

const Dashboard = () => {
    const {user}= useAuth();
    return (
        <Router>
        <div className="row">
                <div className="col-lg-4">
                
                    
                { 
                user.email && user.displayName==="Admin" && 
                <div>
                    <Link to="/manageAllOrder">Manage All Orders</Link> <br />
                    <Link to="/addProduct">Add A Product</Link> <br />
                    <Link to="/makeAdmin">Make Admin</Link> <br />
                    <Link to="/manageProducts">Manage Products</Link> <br />
                    <Link to="/logout">Logout</Link>
                </div>
                }
                { 
                user.email && user.displayName!=="Admin" && 
                <div>
                    <Link to="/pay">Pay</Link> <br />
                    <Link to="/myorders">MyOrders</Link> <br />
                    <Link to="/review">Review</Link> <br />
                    <Link to="/logout">Logout</Link>
                </div>
                }
                    
                
                </div>
                <div className="col-lg-8">
                        <Switch>
                            <Route  exact path="/dashboard">
                                Wellcome to Dashboard
                            </Route>
                            <Route  path="/pay">
                                Pay coming
                            </Route>
                            <Route  path="/myorders">
                                <MyPackage></MyPackage>
                            </Route>
                            <Route path="/review">
                                <Review></Review>
                            </Route>
                            <Route path="/addProduct">
                                <AddPackage></AddPackage>
                            </Route>
                            <Route path="/manageAllOrder">
                                <AllPlan></AllPlan>
                            </Route>
                            <Route path="/makeAdmin">
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path="/manageProducts">
                                <p>Details about Manage all orders or Manage products will be provided later.</p>
                            </Route>
                    </Switch>
                </div>
        </div>
        </Router>
    );
};

export default Dashboard;