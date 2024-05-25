import React from "react";
import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import user from "../../assets/person.jpeg";
import Footer from "../../components/footer/Footer";

function Contact() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="testimonyCard">
      <div id="testimonyCardCardBox">
        <img src={user} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <small>~John Doe</small>
      </div>
    </div>,
    <div id="testimonyCard">
      <div id="testimonyCardCardBox">
      <img src={user} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <small>~John Doe</small>
      </div>
    </div>,
    <div id="testimonyCard">
      <div id="testimonyCardCardBox">
      <img src={user} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <small>~John Doe</small>
      </div>
    </div>,
    <div id="testimonyCard">
      <div id="testimonyCardCardBox">
      <img src={user} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <small>~John Doe</small>
      </div>
    </div>,
    <div id="testimonyCard">
      <div id="testimonyCardCardBox">
      <img src={user} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <small>~John Doe</small>
      </div>
    </div>,
    <div id="testimonyCard">
      <div id="testimonyCardCardBox">
      <img src={user} alt="" />
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <small>~John Doe</small>
      </div>
    </div>,
    <div id="testimonyCard">
      <div id="testimonyCardCardBox">
      <img src={user} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <small>~John Doe</small>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };
  return (
    <>
      <div className="container-fluid" id="theContactPage">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-8 col-md-4">
            <div id="contactInputBox">
              <h4>Get Intouch</h4>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="contactInput"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="contactInput"
                  placeholder="Phone number"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  rows="3"
                  id="contactInput"
                  placeholder="Type message"
                ></textarea>
              </div>
              <div id="contactButton">
                <button>send</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="contactSocialBox">
              <div id="contactSocialBoxWrap">
                <div>
                  <p id="contactIcon">
                    <GrLocation />
                  </p>
                </div>
                <div>
                  <p id="contactIconText">
                  1 Plantation
                    <br />
                    Road Eastleigh
                    <br /> Edenvale
                  </p>
                </div>
              </div>
              <div id="contactSocialBoxWrap">
                <div>
                  <p id="contactIcon">
                    <MdOutlineLocalPhone />
                  </p>
                </div>
                <div>
                  <p id="contactIconText">
                  +2765 987 2956
                    <br />
                    +2765 987 2956
                    <br /> +2765 987 2956
                  </p>
                </div>
              </div>
              <div id="contactSocialBoxWrap">
                <div>
                  <p id="contactIcon">
                    <MdOutlineEmail />
                  </p>
                </div>
                <div>
                  <p id="contactIconText">
                  sales@tasmer.co.za
                    <br />
                    sales@tasmer.co.za
                    <br /> sales@tasmer.co.za
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contactUsMap">
          <h4>Visit Us</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73585386139!2d28.04002455!3d-26.1715215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1713689111402!5m2!1sen!2sza"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      
      </div>
      <div className="container-fluid" id="testimonyPageSection">
       <div className="container">
       <h2>What Happy Clients Say</h2>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
          />
       </div>
        </div>
      <Footer />
    </>
  );
}

export default Contact;
