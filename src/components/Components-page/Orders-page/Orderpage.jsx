import React from 'react'
import Navbar from '../../navbar/Navbar';
import Sidebar from '../../sidebar/Sidebar';
import "../Orders-page/orderpage.scss";

const Orderpage = () => {
  return (
    <div className='order_side'>
      <Sidebar/>
      <div className='order_nav'>
        <Navbar/>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Orderpage