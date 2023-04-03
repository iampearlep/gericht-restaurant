import React, {useRef} from 'react'
import {HiOutlineBars3BottomRight, HiOutlineXMark} from "react-icons/hi2";
import Logo from '../.././assets/logo (1).svg'
import './navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <header className=''>
			<div><img src={Logo} alt="" /></div>
			<nav className='flex flex-col md:flex-row md:w-8/12 md:justify-between' ref={navRef}>
				<ul className='flex flex-col md:flex-row'>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/menu">Menu</Link></li>
					<li><Link to="/#">Pages</Link>
					<ul>
					<li><Link to="/services">Services</Link></li>
				<li><Link to="/search">Search Meals</Link></li>
                <li><Link to="/saved">Saved Meals</Link></li>
            </ul>
					</li>
					<li><a href="/contact">Contact</a></li>
				</ul>
				<ul className='flex flex-col -mt-5 md:-mt-0 md:flex-row items-center'>
					<li><a href="">Log In/Register</a></li>
					<li><a href="">Book Table</a></li>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<HiOutlineXMark />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<HiOutlineBars3BottomRight />
			</button>

		</header>
  )
}

export default Navbar