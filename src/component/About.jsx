import React from "react";
import interior from './../Assets/images/interior.jpg';
import chef1 from './../Assets/images/chef1.png';
import chef2 from './../Assets/images/chef2.png';
import chef3 from './../Assets/images/chef3.png';
import chef4 from './../Assets/images/chef4.png';
import delivery from './../Assets/images/delivery.png';
function About() {
    return(
        <div class="container">
        <main>
            <div class="page-header">
                <div class="secondary-heading">About us</div>
                <div class="breadcrumbs">
                    <ul class="breadcrumbs-list">
                        <li><a href="index.html">Home / </a></li>
                        <li><a href="#">&nbsp;About us</a></li>
                    </ul>
                </div>
            </div>
            <div class="our-work mt-25 ">
                <div class="img-content w-50">
                    <div class="third-heading fs-40">Restaurant is like a theater.<br />
                        Our task is to amaze you!</div>
                    <div class="secondary-text fs-16 mt-25 line-height-2">In our modern yet relaxed interior, our well-informed team truly delivers on the promise of world-class service. It's often been said that the food at Stratus is even better than the view. Join us, and we'll let you decide…is it the food or the view you love the most?</div>
                    <div class="secondary-text fs-16 mt-25 line-height-2">Treat yourself and your guests to the delicious dishes on our carefully curated menus, that derive inspiration from local markets and feature fresh seasonal vegetables and favourite comfort foods.</div>
                    <div class="mt-25 mb-sm-25">
                        <a href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk" target="_blank" /><button class="btn-primary"><i class="fa fa-play mr-10"></i>Promo Video</button>
                    </div>
                </div>
                <div class="w-50">
                    <div class="img-video">
                        <img src={interior} class="img-responsive" />
                        <div class="video-icon">
                            <a href="https://www.youtube.com/watch?v=F3zw1Gvn4Mk" target="_blank" ><i
                                    class="fa fa-play-circle-o"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-75">
                <div class="img-content">
                        <div class="third-heading">They will cook for you</div>
                    <div class="secondary-text fs-16 mt-25 line-height-2">Attentive, professional, and world class. Our team is dedicated to creating a luxurious atmosphere for you and your guests, ensuring you enjoy every visit to Stratus Restaurant.</div>
                </div>
                <div class="grid-container">
                    <div class="grid-items-chef">
                        <div class="faded-back">
                            <img src={chef1} class="img-responsive" />
                        </div>
                        <div class="chef-content">
                            <div class="fw-bold fs-18">Paul Trueman</div>
                            <div class="text-secondary mt-5">Chef</div>
                            <div class="social-media mt-5">
                                <a href="https://www.facebook.com/" target="_blank" class="chef-icon"><i class="fa fa-facebook-square mr-10"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" class="chef-icon"><i class="fa fa-instagram mr-10"></i></a>
                                <a href="https://youtube.com/" target="_blank" class="chef-icon"><i class="fa fa fa-youtube-play mr-10"></i></a>
                                <a href="https://twitter.com/" target="_blank" class="chef-icon"><i class="fa fa-twitter mr-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="grid-items-chef">
                        <div class="faded-back">
                            <img src={chef2} class="img-responsive" />
                        </div>
                        <div class="chef-content">
                            <div class="fw-bold fs-18">Emma Newman</div>
                            <div class="text-secondary mt-5">Assistant chef</div>
                            <div class="social-media mt-5">
                                <a href="https://www.facebook.com/" target="_blank" class="chef-icon"><i class="fa fa-facebook-square mr-10"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" class="chef-icon"><i class="fa fa-instagram mr-10"></i></a>
                                <a href="https://youtube.com/" target="_blank" class="chef-icon"><i class="fa fa fa-youtube-play mr-10"></i></a>
                                <a href="https://twitter.com/" target="_blank" class="chef-icon"><i class="fa fa-twitter mr-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="grid-items-chef">
                        <div class="faded-back">
                            <img src={chef3} class="img-responsive" />
                        </div>
                        <div class="chef-content">
                            <div class="fw-bold fs-18">Oscar Oldman</div>
                            <div class="text-secondary mt-5">Chef</div>
                            <div class="social-media mt-5">
                                <a href="https://www.facebook.com/" target="_blank" class="chef-icon"><i class="fa fa-facebook-square mr-10"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" class="chef-icon"><i class="fa fa-instagram mr-10"></i></a>
                                <a href="https://youtube.com/" target="_blank" class="chef-icon"><i class="fa fa fa-youtube-play mr-10"></i></a>
                                <a href="https://twitter.com/" target="_blank" class="chef-icon"><i class="fa fa-twitter mr-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="grid-items-chef">
                        <div class="faded-back">
                            <img src={chef4} class="img-responsive" />
                        </div>
                        <div class="chef-content">
                            <div class="fw-bold fs-18">Ed Freeman</div>
                            <div class="text-secondary mt-5">Chef</div>
                            <div class="social-media mt-5">
                                <a href="https://www.facebook.com/" target="_blank" class="chef-icon"><i class="fa fa-facebook-square mr-10"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" class="chef-icon"><i class="fa fa-instagram mr-10"></i></a>
                                <a href="https://youtube.com/" target="_blank" class="chef-icon"><i class="fa fa fa-youtube-play mr-10"></i></a>
                                <a href="https://twitter.com/" target="_blank" class="chef-icon"><i class="fa fa-twitter mr-10"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="delivery-app">
                    <div class="download-content">
                        <div class="heading">Free delivery<br /> service.</div>
                        <div class="secondary-text line-height-2">We are offering free home delivery service to our all the customer across the world to <br />let them enjoy our food at the confort of there home.</div>
                        <div class="img-download mt-10">
                            <button class="btn-primary"><i class="fa fa-cutlery mr-10"></i><a href="menu.html">Our menu</a></button>
                        </div>
                    </div>
                    <div class="delivery-img">
                        <img src={delivery} class="img-responsive" />
                    </div>
                </div>
            </div>
        </main>
    </div>
    );
}

export  default About
