import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import audiBackVertical from "../Assets/audiBackVertical.png";
import audi from "../Assets/audi.png";
import BMW from "../Assets/BMW.png";

export default function Home() {
  const [imgIndex, setImgIndex] = useState(0);
  const imgList = [BMW, audiBackVertical, audi];

  function increaseIndex() {
    setImgIndex((prevIndex) => prevIndex + 1);
    if (imgIndex === imgList.length - 1) {
      setImgIndex(0);
    }
  }

  function decreaseIndex() {
    setImgIndex((prevIndex) => prevIndex - 1);
    if (imgIndex === 0) {
      setImgIndex(imgList.length - 1);
    }
  }

  return (
    <div className="main-container">
      <div className="split-container">
        <div className="left-right-space"></div>
        <div className="left-panel">
          <h2>Elevate Your Drive with Exquisite Performance</h2>
          <br />
          <h5>
            At ChekCars, we don’t just sell cars—we curate rolling works of art.
            From the sculpted lines of our supercars to the heart-pounding roar
            of their engines, every vehicle in our collection is chosen to
            ignite your passion for the open road.
          </h5>
          <br />
          <h5>
            Step into a world where luxury meets raw power. Whether you crave
            the precision handling of a track-ready beast or the refined
            elegance of a grand tourer, our handpicked selection delivers an
            unforgettable experience behind the wheel. Immerse yourself in
            cutting-edge design, next-level technology, and performance that
            thrills at every turn.
          </h5>
          <br />
          <p>Embark on the ultimate driving journey today.</p>

          <Link to="/Vehicles">
            <button className="default-button">
              Discover Your Dream Car ⟶
            </button>
          </Link>
        </div>
        <div className="right-panel">
          <img src={imgList[imgIndex]} alt="Audi-R-8" className="panel-img" />
          <button onClick={decreaseIndex} className="nav-button prev">
            &#11164;
          </button>
          <button onClick={increaseIndex} className="nav-button next">
            &#11166;
          </button>
        </div>
        <div className="left-right-space"></div>
      </div>
    </div>
  );
}
