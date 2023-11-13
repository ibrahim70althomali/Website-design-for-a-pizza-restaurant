import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

// اسم المكتبه وتعرفيها طعبا وش تويتر الي فوق  ايقونه وذ طريقه الستدعاء)(Material)

const Footer = () => {
  return (
    <div className="footer">
    <div className="socialMedia">
       <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
    </div>
    <p> &copy; 2023 ebrehim70@gmail.com     ابراهيم الثمالي</p>
  </div>
);
}

export default Footer
