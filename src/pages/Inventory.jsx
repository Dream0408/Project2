import React from 'react'
import ProductList from '../components/Components-page/Inventory-page/ProductList';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import "../style/inventory.scss";

const Inventory = () => {
  return (
    <div className='inven_side'>
        <Sidebar/>
      <div className='inven_nav'>
        <Navbar/>
        <div className='inven_list'>
          <ProductList/>
        </div>
      </div>
    </div>
  )
}

export default Inventory