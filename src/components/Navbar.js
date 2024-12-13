import logo from '../assets/logo.svg'
function Navbar(props) {
  return (
    <div className="navbar">
    <nav>
      <img src={logo} alt='INWOOD'/>
      <ul>
        <li>{props.logo}</li>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <button>Sign Up</button>
    </nav>
    <div></div>
    </div>
  );
}

export default Navbar;