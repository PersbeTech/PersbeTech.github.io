import React,{useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () =>(
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wpt">What is PT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='pt__navbar'>
        <div className='pt__navbar-links'>
            <div className='pt__navbar-links_logo'>
            <img src={logo} alt="logo" />
            </div>
            
            <div className='pt__navbar-links_container'>
              <Menu/>
            </div>
        </div>

        <div className='pt__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign up</button>
        </div>

        <div className="pt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="pt__navbar-menu_container scale-up-center">
          <div className="pt__navbar-menu_container-links">
            <Menu/>
          </div>
          <div className="pt__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar