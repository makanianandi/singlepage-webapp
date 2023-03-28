import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Assets/images/logo.svg';


function Header() {
    return(
    //     <nav id="header" class="headermenu">
	// 			<ul class="text-center">
	// 				<li><a href="index.html"><img src={logo}/></a></li>
	// 				<li><a href="index.html" class="active"><span class="dot"></span>Home</a></li>
	// 				<li><a href="menu.html">Menu</a></li>
	// 				<li><a href="blog.html">Blog</a></li>
	// 				<li><a href="contact.html">Contact</a></li>
	// 				<li><a href="about.html">About</a></li>
	// 			</ul>		
    //   </nav>
	   <nav id="header" class="headermenu">
	   <ul>
	   <li>
		   <Link to="/"><img src={logo}/></Link>
		 </li>
		 <li>
		   <Link to="/">Home</Link>
		 </li>
		 <li>
		   <Link to="/about">About</Link>
		 </li>
		 <li>
		   <Link to="/contact">Contact</Link>
		 </li>
	   </ul>
	 </nav>
   
    );
}

export  default Header
