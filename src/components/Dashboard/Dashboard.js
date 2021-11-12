import React from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router, Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AllPlan from '../AllPlan/AllPlan';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyProduct from '../MyProduct/MyProduct';
import Review from '../Review/Review';

const Dashboard = () => {
    const {user,admin,logOut}= useAuth();
    let { path, url } = useRouteMatch();
    return (
        <Router>
        <div className="row">
                <div className="col-lg-4">
                
                { 
                user.email && admin && 
                <div>
                    <Link to={`${url}/manageAllOrder`}>Manage All Orders</Link> <br />
                    <Link to={`${url}/addProduct`}>Add A Product</Link> <br />
                    <Link to={`${url}/makeAdmin`}>Make Admin</Link> <br />
                    <Link to={`${url}/manageProducts`}>Manage Products</Link> <br />
                    <Button onClick={logOut} variant="light">Logout</Button>
                </div>
                }
                { 
                user.email && !admin && 
                <div>
                    <Link to={`${url}/pay`}>Pay</Link> <br />
                    <Link to={`${url}/myorders`}>MyOrders</Link> <br />
                    <Link to={`${url}/review`}>Review</Link> <br />
                    <Button onClick={logOut} variant="light">Logout</Button>
                </div>
                }
                </div>
                <div className="col-lg-8 ">
                        <Switch>
                            <Route  exact path={path}>
                                Wellcome to Dashboard
                            </Route>
                            <Route  path={`${path}/pay`}>
                            Payment system coming soon.
                            </Route>
                            <Route  path={`${path}/myorders`}>
                                <MyProduct></MyProduct>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/manageAllOrder`}>
                                <AllPlan></AllPlan>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProduct></ManageProduct>
                            </Route>
                    </Switch>
                </div>
        </div>
        </Router>
    );
};

export default Dashboard;