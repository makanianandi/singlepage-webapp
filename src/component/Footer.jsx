import React from "react";
import logo from '../Assets/images/logo.svg';


const Footer = () => {
    return(
<footer class="footer">
		<div class="footer-logo">
			<img src={logo} />
		</div>
		<div class="social-media">
			<i class="fa fa-facebook-square"></i>
			<i class="fa fa-instagram"></i>
			<i class="fa fa fa-youtube-play"></i>
			<i class="fa fa-twitter"></i>
		</div>
		<div class="copyright">
			<p class="fs-16 secondary-text">© late 2022 Starbelly. All Rights Reserved.</p>
		</div>
	</footer>
)
}
export  default Footer