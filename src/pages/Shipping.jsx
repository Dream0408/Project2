import React from 'react'
import ShippingTable from '../components/Components-page/Shipping-page/ShippingTable';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import "../style/shipping.scss";

const Shipping = () => {
  return (
    <div className='shipping__side'>
      <Sidebar/>
      <div className='shipping__nav'>
      <Navbar/> 
      <ShippingTable/>
      Shipping
      </div>
    </div>

  )
}

export default Shipping