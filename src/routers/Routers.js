import { Routes,Route, Navigate } from "react-router-dom";
import React from 'react';
import Home from "../pages/Home";
import Inventory from '../pages/Inventory';
import Login from '../pages/Login';
import Shipping from '../pages/Shipping';
import User from '../pages/User';
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import ShippingAdd from "../components/Components-page/Shipping-page/ShippingAdd";
import Addpageshipping from "../components/Components-page/Shipping-page/Addpageshipping";
import Orderpage from "../components/Components-page/Orders-page/Orderpage";
import Orders from "../components/Admin/Orders";
import AllOrders from "../components/Admin/AllOrders";
import Users from "../components/Admin/Users";
import DashAllorder from "../components/Dashboard/DashAllorder";
import DashUsers from "../components/Dashboard/DashUsers";
import DashAllshipping from "../components/Dashboard/DashAllshipping";


const Routers = () => {
    return(
    <Routes>
        <Route path="/" element={<Navigate to='home'/>} />
        <Route path="home" element={<Home/>} />
        <Route path="inventory" element={<Inventory/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>}/>

        <Route  path="checkout" element={<ProtectedRoute>
            <Checkout/>
        </ProtectedRoute>}/>


       
        <Route path="orders" element={<Orderpage/>} />    

        <Route path="order" element={<Orders/>} />     
        <Route path="Addorders" element={<Order/>} />
        <Route path="shipping" element={<Shipping/>} />
        <Route path="users" element={<Users/>} />
        <Route path="user" element={<User/>} />
        <Route path="dashboard" element={<Dashboard/>} />


        <Route path="shippingadd" element={<ShippingAdd/>} />
        <Route path="addshipping" element={<Addpageshipping/>} />
        
        <Route path="dashboard/All-order" element={<DashAllorder/>} />
        {/* <Route path="dashboard/users" element={<Users/>} /> */}

        <Route path="/*" element={<ProtectedRoute/>}>
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="dashboard/users" element={<DashUsers/>} />
        <Route path="dashboard/All-orders" element={<DashAllorder/>} />
        <Route path="dashboard/shipping" element={<DashAllshipping/>} />
        </Route>

    </Routes>
    );
};

export default Routers;