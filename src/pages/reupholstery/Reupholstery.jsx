import React from "react";
import reus from "../../assets/reus.png";
import reus1 from "../../assets/reus1.png";
import reus2 from "../../assets/reus2.png";
import "./Reupholstery.css";
import Footer from "../../components/footer/Footer";

function Reupholstery() {
  return (
    <>
      <div className="container-fluid" id="theReupholsteryPage">
        <h2>Reupholstery</h2>
      </div>

      <div className="container">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="theReupholsteryCardImg">
              <img src={reus} />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="theReupholsteryCardText">
              <h1>Sofa Reupholstery.</h1>
              <h5>
                We can upholster just about anything in your home. Let's make
                your vision a reality.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged
              </h5>
              <a href="https://wa.me/+27659872956" target="_blank" >
                <button  id="theReupholsteryCardBtn">GET A FREE QUOTATION</button>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="theReupholsteryCardImg">
              <img src={reus2} />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="theReupholsteryCardText">
              <h1>Sofa Reupholstery.</h1>
              <h5>
                We can upholster just about anything in your home. Let's make
                your vision a reality.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged
              </h5>
              <a href="https://wa.me/+27659872956" target="_blank" >
                <button  id="theReupholsteryCardBtn">GET A FREE QUOTATION</button>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="theReupholsteryCardImg">
              <img src={reus1} />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="theReupholsteryCardText">
              <h1>Sofa Reupholstery.</h1>
              <h5>
                We can upholster just about anything in your home. Let's make
                your vision a reality.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged
              </h5>
              <a href="https://wa.me/+27659872956" target="_blank" >
                <button  id="theReupholsteryCardBtn">GET A FREE QUOTATION</button>
              </a>
            </div>
          </div>
        </div>
      </div>

    <Footer/>
    </>
  );
}

export default Reupholstery;
