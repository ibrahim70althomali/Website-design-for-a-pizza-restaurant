import React,{useState} from 'react'
import Logo from '../assets/pizzaLogo.png';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';


const Navbar = () => {
  
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> صفحة الرئيسه </Link>
          <Link to="/menu"> المنيو </Link>
          <Link to="/about"> عنا </Link>
          <Link to="/contact"> تواصل معنا </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> صفحة الرئيسه  </Link>
        <Link to="/menu"> المنيو </Link>
        <Link to="/about"> حول المطعم </Link>
        <Link to="/contact"> تواصل معنا  </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar
