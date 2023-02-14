import React from 'react'
import "../Dashboard/dashallorder.scss";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import AdminNav from '../Admin/AdminNav';
import AllOrders from '../Admin/AllOrders';


const DashAllorder = () => {
  return (
    <div className='dash_side'>
      <Sidebar/>
      <div className='dash_nav'>
      <Navbar/>
      <div className='dash_adminnav'>
        <AdminNav/>
        <div className='all_order'>
          <AllOrders/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DashAllorder