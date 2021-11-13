import React from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router, Link, Route, Switch, useHistory, useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AllPlan from '../AllPlan/AllPlan';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyProduct from '../MyProduct/MyProduct';
import Review from '../Review/Review';
import './Dashboard.css';
const Dashboard = () => {
    const history = useHistory()
    const {user,admin,logOut}= useAuth();
    let { path, url } = useRouteMatch();
    const logout= ()=>{
        logOut();
        history.push('/')
    }
    return (
        <Router>
        <div className="row">
                <div className="col-lg-3 my-5">
                
                { 
                user.email && admin && 
                <div>
                    <Link to={`${url}/manageAllOrder`} className="dashboard-link">Manage All Orders</Link> <br />
                    <Link to={`${url}/addProduct`} className="dashboard-link">Add A Product</Link> <br />
                    <Link to={`${url}/makeAdmin`} className="dashboard-link">Make Admin</Link> <br />
                    <Link to={`${url}/manageProducts`} className="dashboard-link">Manage Products</Link> <br />
                    <Button onClick={logout} variant="light" className="dashboard-link btn">Logout</Button>
                </div>
                }
                { 
                user.email && !admin && 
                <div >
                    <Link to={`${url}/pay`} className="dashboard-link">Pay</Link> <br />
                    <Link to={`${url}/myorders`} className="dashboard-link">MyOrders</Link> <br />
                    <Link to={`${url}/review`} className="dashboard-link">Review</Link> <br />
                    <Button onClick={logout} variant="light" className="dashboard-link btn">Logout</Button>
                </div>
                }
                </div>
                <div className="col-lg-9 ">
                    <h1 className="my-3">Dashboard</h1>
                    <hr />
                        <Switch>
                            <Route  exact path={path}>
                                
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