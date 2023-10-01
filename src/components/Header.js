import { useState, useContext} from "react";
import Logo from "../assests/img/logo.png"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnile";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={Logo}
      ></img>
    </a>
  );

// const loggedInUser = () => {
//   return false
// }

const Header = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const isOnline = useOnline()
  const { user } = useContext(UserContext)
  const addCart = useSelector(store => store.cart.items)
    return (
      <div className="header">
        {/* {title} */}
        {/* {Title()} function way */}
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/instamart'>Instmart</Link></li>
            <li><Link to="/cart">Cart { addCart.length} Items</Link></li>
            <li>{isOnline ? "✅" : "🚫"}</li>
            <li>{user.name}</li>
          </ul>
         
        </div>
        {
          (isloggedIn) ? <button onClick={() => setIsLoggedIn(false)}>Login</button> :
            <button onClick={() => setIsLoggedIn(true)}>Logout</button>
        }
      </div>
    );
  };

export default Header;