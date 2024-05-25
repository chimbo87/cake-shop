import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import "./Fashion.css";
import Footer from "../../components/footer/Footer";
import Images from "../../components/common/Image";

function Fashion() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(Images);
  const [activeButton, setActiveButton] = useState(null);
  const menuItems = ["All", ...new Set(Images.map((val) => val.title))];

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    if (buttonId === 1) {
      setProducts(Images);
    } else {
      const selectedCategory = menuItems[buttonId - 1];
      const filteredProducts = Images.filter((product) => product.title === selectedCategory);
      setProducts(filteredProducts);
    }
  };

  return (
    <>
      <div id="theFashionPage">
        <h1>Fashion</h1>
      </div>
      <div className="container" id="ourWorkBtnsBox">
        <div id="ourWorkBtns">
          {/* Map through menuItems to create buttons */}
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                className={activeButton === index + 1 ? "active" : ""}
                onClick={() => handleButtonClick(index + 1)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="container" id="fashionCardBox">
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4 col-md-4" key={product.id}>
              <div id="fashionCard">
                <div className="fashion-card">
                  <img src={product.image[0]} alt={product.description} />
                  <h6>{product.title}</h6>
                  <p>R{product.price.toFixed(2)}</p>
                  <div id="fashionCardBtn">
                    <button id="fashionCardBtnA">Order Now</button>
                    <button
                      id="fashionCardBtnB"
                      onClick={() => {
                        navigate(`/fashiondetails/${product.id}`);
                      }}
                    >
                      View Details <GoArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="fashionPagination">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">  
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  );
}

export default Fashion;
