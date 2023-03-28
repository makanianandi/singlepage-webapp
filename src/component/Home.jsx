import React from "react";
import '../Assets/css/style.css';
import girl from '../Assets/images/girl.png';
import burger from '../Assets/images/1.svg';
import cake from '../Assets/images/2.svg';
import interior from '../Assets/images/interior.jpg';
import appStore from '../Assets/images/appStore.svg';
import playStore from '../Assets/images/playStore.svg';
import phones from '../Assets/images/phones.png';

function Home(){
  return(
	<div class="container">
		<main>
			<div class="hero-section">
				<div class="left-content">
					<div class="heading">We do not cook,<br /> we create your <br /> emotions!</div>
					<div class="secondary-text line-height-2">Once a wise man said "Good Food Builds Good Health and Good Health <br />Creates Good Mindset and Good Mindset Represents Good People."
						<br/>Our Restuarant Provide You With One Of The Best Food in North America.<br/> Start your food journey by clicking Our Menu Button Down Below. <br />
					</div>
					<div class="mt-5"><button class="btn-primary"><i class="fa fa-cutlery mr-10"></i>Our menu</button><a
							class="btn-text" href="about.html">About us</a></div>
				</div>
				<div class="right-content">
					<img src={girl} class="img-circle" alt=""/>
					<img src={burger} class="icon-burger" alt=""/>
					<img src={cake} class="icon-cake" alt=""/>
				</div>
			</div>
			<div class="our-work">
				<div class="w-50">
					<div class="img-square">
						<img src={interior} alt="" class="object-fit-cover img-sm-responsive" width="450"
							height="550" />
						<div class="square">
							<div class="number-text-black">
								<div>17</div>
							</div>
							<div class="">
								<div>Years Experience</div>
							</div>
						</div>
					</div>
				</div>
				<div class="img-content w-50">
					<div class="secondary-heading">We are doing more than <br /> you expect</div>
					<div class="locate-section">
						<div class="number-text">
							<div>01</div>
						</div>
						<div class="section-content">
							<div class="third-heading">We are located in the city center</div>
							<div class="secondary-text fs-16 mt-5 line-height-1">We have opened new stores across Metrocities with all unique interior and exterior designs representing the cities you are exploring.</div>
						</div>
					</div>
					<div class="locate-section">
						<div class="number-text">
							<div>02</div>
						</div>
						<div class="section-content">
							<div class="third-heading">Fresh, organic ingredients</div>
							<div class="secondary-text fs-16 mt-5 line-height-1">Startbelly has there own farming facilites where every vegetable and incrediants which are used in our recipes are grown.</div>
						</div>
					</div>
					<div class="locate-section">
						<div class="number-text">
							<div>03</div>
						</div>
						<div class="section-content">
							<div class="third-heading">Own fast delivery</div>
							<div class="secondary-text fs-16 mt-5 line-height-1">Rather than using 3rd Party Delivery Drivers, we have build in-house delivery system through which we can deliver our food faster than ever before.</div>
						</div>
					</div>
				</div>
			</div>
			<div class="download-app">
				<div class="download-content">
					<div class="heading">Download our <br />mobile app.</div>
					<div class="secondary-text line-height-2">Now you can enjoy our Online Service directly from Your Phone.<br />We are available on both Android and iOS devices.</div>
					<div class="img-download mt-10">
						<a href="https://www.apple.com/ca/app-store/" target="_blank"><img
								src={appStore} /></a>
						<a href="https://play.google.com/store/apps" target="_blank"><img
							src={playStore} /></a>
					</div>
				</div>
				<div class="application">
					<img src={phones} height="550" width="auto" class="img-responsive" />
				</div>
			</div>
		</main>
	</div>
  );
}

export default Home
