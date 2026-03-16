import { APP_LOGO_URL } from "../utils/constants";

const heading = <h1>Foodie</h1>

const Header = () => (
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
    </div>

  </div>
)

export default Header;