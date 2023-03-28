import React from "react";

function Contact() {
    return(
        <main>
			<div class="main-section">
				<div class="left-contact-content">
					<div class="heading">Get in touch with <br /> Starbelly!</div>
					<div class="secondary-text line-height-2">We will be more than happy to talk with you.
						<br />Here you can submit your queries that will reach to us. <br />And we will reply get back to you ASAP.
					</div>
					<div class="breadcrumbs">
						<ul class="breadcrumbs-list-contact">
							<li><a href="index.html">Home / </a></li>
							<li><a href="#">&nbsp;Contact</a></li>
						</ul>
					</div>
				</div>
				<div class="right-contact-content">
					<div class="form-main-area-frame">
						<div class="form-main-area">
							<div class="form-main">
								<h3 class="form-title">Send Message</h3>
								<form class="form-details">
									<div class="form-details-inputs">
										<input type="text" name="name" placeholder="Name" required />										
									</div>
									<div class="form-details-inputs">
										<input type="email" name="email" placeholder="Email" required />
									</div>
									<div class="form-details-inputs">
										<textarea name="text" placeholder="Message" required></textarea>										
									</div>
									<p class="form-text">
										Your Privacy Is Our Priority.
									</p>
									<button class="btn-primary">Submit</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="contact-info-container">
				<div class="contact-info">
					<div class="contact-row">
						<div class="contact-block">
							<div class="contact-sub">
								<div class="number-text">01</div>
								<div class="contact-text">
									<h3 class="contact-text-title">Welcome</h3>
									<p class="contact-text-para">Ontario, University Ave.</p>
								</div>
							</div>
						</div>
						<div class="contact-block">
							<div class="contact-sub">
								<div class="number-text">02</div>
								<div class="contact-text">
									<h3 class="contact-text-title">Call Us</h3>
									<p class="contact-text-para">+1 (929)231-4100</p>
								</div>
							</div>
						</div>
						<div class="contact-block">
							<div class="contact-sub">
								<div class="number-text">03</div>
								<div class="contact-text">
									<h3 class="contact-text-title">Email Us</h3>
									<p class="contact-text-para">contactstar@ouremail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="responsive-map-container">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11579.436719717562!2d-80.53272159999999!3d43.48440909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf31d0cec9491%3A0x8bf5f60c306d2207!2sConestoga%20College%20-%20Waterloo!5e0!3m2!1sen!2sca!4v1660570629231!5m2!1sen!2sca"></iframe>
			</div>
		</main>
    );
}

export  default Contact
