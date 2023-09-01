import React from "react";

const style = {
header:{
    display: 'flex',
    background: 'pink',
},
h1: {
    maxWidth: '1200px',
    fontSize: '100px'
},
}
const Header = () => {
    return (
      <header style={style.header}>
        <div>
            <h1 style={style.h1}>BlogTopia!</h1>
        </div>
      </header>
    );
  };
  
  export default Header;
  