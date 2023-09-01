import React from "react";
import GitHubLogo from '../images/GitHub.png';
import LinkedInLogo from '../images/LinkedIn.png';
const style = {
    Logo:{
        width: '100px',
        height: '100px'
    }
  };

const Footer = () => {
    return (
      <footer>
        <div style={style.container}>
            <div>
                <a href="https://github.com/DanialDevelops"><img src={GitHubLogo} alt="GitHub" style={style.Logo}></img ></a>
                <a href="https://www.linkedin.com/in/danial-choudhry-45a598270/"><img src={LinkedInLogo} alt="LinkedIn" style={style.Logo}></img ></a>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  