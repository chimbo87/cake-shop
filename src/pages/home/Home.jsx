import React from "react";
import "./Home.css";
import homebanner01 from "../../assets/baker03.jpeg";
import homebanner02 from "../../assets/baker06.jpeg";
import homebanner03 from "../../assets/bakery04.jpeg";
import { SlLocationPin } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

import { useNavigate } from "react-router-dom";
import Latestfashion from "../../components/latestfashion/Latestfashion";

function Home() {
  const navigate = useNavigate();
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <img src={homebanner01} />
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <img src={homebanner02} />
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <img src={homebanner03} />
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
      <div className="container-fluid" id="theHomePageBox">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="homeBoxCard">
              <h1>
                Welcome to Sweet Indulgence, where every cake is a delightful
                work of art
              </h1>
            
              <button>Shop Now</button>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="homeBoxCard">
              <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                disableButtonsControls={true}
                disableDotsControls={true}
                infinite={true}
                autoPlayInterval={5000}
                responsive={responsive}
                animationType="fadeout"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="homePageWrap">
        <div class="row" id="homePageWrapBox">
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <SlLocationPin id="homePageWrapContactIcon" />
              </span>
              <p>
                1 Planet Mars
                <br />
                Jupiter Mars
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <SlCalender id="homePageWrapContactIcon" />
              </span>
              <p>
                Mon~Sat
                <br />
                Close Holidays
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <MdOutlinePhone id="homePageWrapContactIcon" />
              </span>
              <p>
                +27 65 987 2956
                <br /> +27 65 987 2956
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="homePageWrapContact">
              <span>
                {" "}
                <MdOutlineMailOutline id="homePageWrapContactIcon" />
              </span>
              <p>
                test@example.com
                <br /> test@example.com
              </p>
            </div>
          </div>
        </div>

        <div class="row" id="homeAboutContainer">
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutContainerCard">
              <h4>Who Are We ?</h4>
              <p>
                Tasmer fashions and reupholsters was launched 6 years ago by
                experts who have more than 10 years in the fashion and
                upholstery industry.
              </p>
              <p>
                We custom or tailor make on all type of clothes for any occasion
                ( men, ladies and kids) Traditional attires, matric dance
                dresses, bridal wear, uniforms, formal and casual wear, we do it
                all. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <button
                onClick={() => {
                  navigate("/about");
                }}
              >
                Read more
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutContainerCard">
              <img src={homebanner03} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Latestfashion />
      <Footer />
    </>
  );
}

export default Home;
