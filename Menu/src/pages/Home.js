import { Link } from '@mui/material'
import React from 'react'
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";



const Home = () => {
  return (
    <div className="home"  style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
      <h1>بيتزا</h1>
      <p>بيتزا تناسب أي مذاق</p>
      <Link to ="/Menu">
      <button >اطلبها الان </button>
      </Link>
      </div>
    </div>
  )
}

export default Home
