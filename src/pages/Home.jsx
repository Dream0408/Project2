import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Widget from '../components/widget/Widget';
import '../style/home.scss';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="shipping"/>
        </div>
      </div>
    </div>
  )
}

export default Home