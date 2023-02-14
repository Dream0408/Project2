import React from 'react'
import AdminNav from '../Admin/AdminNav';
import AllShipping from '../Components-page/Shipping-page/AllShipping';
import "../Dashboard/dashallshipping.scss";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

const DashAllshipping = () => {
  return (
    <div className='dash_side'>
        <Sidebar/>
        <div className='dash_nav'>
            <Navbar/>
            <div>
                <AdminNav/>
                <div>
                    <AllShipping/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashAllshipping