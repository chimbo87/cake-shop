import React from "react";
import "./Latestfashion.css";
import homebanner from "../../assets/homebanner05.png";
import homeaboutbanner from "../../assets/aboutbanner02.png";
import homebanner01 from "../../assets/baker01.jpeg";
import homebanner02 from "../../assets/baker02.jpeg";
import homebanner03 from "../../assets/bakery04.jpeg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function Latestfashion() {
  const handleDragStart = (e) => e.preventDefault();
  const navigate = useNavigate();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homebanner01} alt="" />
        <p>Vanila Cake</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
        <button>view More</button>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <img src={homebanner03} alt="" />
        <p>Vanila Cake</p>
        <button>view More</button>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <img src={homebanner01} alt="" />
        <p>Vanila Cake</p>
        <button>view More</button>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <img src={homebanner02} alt="" />
        <p>Vanila Cake</p>
        <button>view More</button>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <img src={homebanner01} alt="" />
        <p>Vanila Cake</p>
        <button>view More</button>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
      <img src={homebanner01} alt="" />
        <p>Vanila Cake</p>
        <button>view More</button>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src={homebanner} alt="" />
        <p
          class="viewMoreText"
          onClick={() => {
            navigate("/fashion");
          }}
        >
          View more <GoArrowRight />
        </p>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  return (
    <div id="theParterPageSection">
      <div className="container">
        <h2>Our Latest Fashion</h2>
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
  );
}

export default Latestfashion;
