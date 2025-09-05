import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pfp from '../assets/images/pfp.jpg'; // Import the image

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pfp} alt="Avatar" /> {/* Use the imported image */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/zealp25" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zeal-patel-67ba4b230/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Zeal Patel</h1>
          <a 
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/bfd9680d48d24e358fcb154663142c2b" 
            target="_blank" 
            rel="noreferrer"
          >
            AWS Certified DevOps Engineer – Professional
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/zealp25" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/zeal-patel-67ba4b230/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;