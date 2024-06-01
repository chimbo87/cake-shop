import React from "react";
import "./Footer.css";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className="container-fluid" id="footerPage">
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="FooterCardA">
            <h4>
              Contact Us<span></span>
            </h4>
           <div id="FooterCardADetails">
           <p>
              1 Plantation
              <br />
              Road Eastleigh
              <br />
              Edenvale
            </p>
            <p>
            +123 456 7890
              <br />
              +123 456 7890
              <br />
              +123 456 7890
            </p>
            <p>
             test@example.com
              <br />
              test@example.com
              <br />
              test@example.com
            </p>
           </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="FooterCardB">
            <h4>
              Follow Us<span></span>
            </h4>
            <p>
              Welcome to <b>CAKE SHOP</b> where style meets elegance! Step into
              a world of timeless fashion and discover the latest trends curated
              just for you. Whether you're looking for chic outfits, statement
              accessories, or wardrobe essentials, we've got you covered.
              Explore our collection and elevate your personal style today
            </p>
            <div id="FooterCardBIcons">
              <SlSocialFacebook id="FooterCardBI" />
              <IoLogoInstagram id="FooterCardBI" />
              <IoLogoWhatsapp id="FooterCardBI" />
              <FaXTwitter id="FooterCardBI" />
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="FooterBase">
        <small> &copy; Cake-Shop 2024. Crafted by CHIMBO</small>
      </div>
    </div>
  );
}

export default Footer;
