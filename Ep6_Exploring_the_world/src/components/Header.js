import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";

const heading = <h1>Foodie</h1>

const Header = () => {

  console.log("Header rendered");
  
  const [btnName, setBtnName] = useState("log in");

  const btnClick = () => {
    (btnName === "log in") 
    ? setBtnName("log out") 
    : setBtnName("log in");

    /* == setValue in useState must change the state variable with some  new value then it will call or render the component - **reconciliation** 
    setBtnName("log in");
    */
  }

  return (

  <div className="header">
    <div className="header-left">
      {heading}
      <img alt="app-logo" src={APP_LOGO_URL} className="header-img"/>
    </div>
    <div className="header-right">
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Content</h3>
      <h3>Cart</h3>
      <button className="logInOut" onClick={btnClick}>{btnName}</button>
    </div>

  </div>
)
}

export default Header;