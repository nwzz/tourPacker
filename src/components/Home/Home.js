import React from "react";
//import { Carousel } from "react-bootstrap";
import Services from "../Services/Services";
// import caro1 from "../../images/travel-img/caro2.jpg";
// import caro2 from "../../images/travel-img/caro5.jpg";
// import caro3 from "../../images/travel-img/seabeach.jpg";
// import DashBoard from "../DashBoard/DashBoard";
import "./Home.css";
import ShowOff from "../ShowOff/ShowOff";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      {/* <div>
        <Carousel variant="dark">
          <Carousel.Item style={{ height: "600px", width: "100%" }}>
            <img
              className="d-block w-100 align-item-center"
              src={caro1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Travelling is Meditation</h5>
              <p>We care about You the best Way</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "600px", width: "100%" }}>
            <img className="d-block w-100" src={caro2} alt="Second slide" />
            <Carousel.Caption>
              <h5>No Travelling No Life</h5>
              <p>We Provide Care and Love more than Treatment</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "600px", width: "100%" }}>
            <img className="d-block w-100" src={caro3} alt="Third slide" />
            <Carousel.Caption>
              <h5>Where do You Want to go before you Die </h5>
              <p>
                The Second way of Learning is Reading book First way you are
                getting here!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}
      <div
        id="carousel-thumb"
        className="carousel slide carousel-fade carousel-thumbnails"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://i.ibb.co/VgLF55D/slider-1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.ibb.co/9p3Cnk9/slider-2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.ibb.co/sC4SgqP/slider-3.jpg"
              alt="Third slide"
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-thumb"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-thumb"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>

        <ol className="carousel-indicators">
          <li
            data-target="#carousel-thumb"
            data-slide-to="0"
            className="active"
          >
            {" "}
            <img
              className="d-block w-100 img-fluid"
              src="https://i.ibb.co/VgLF55D/slider-1.jpg"
              alt="true"
            />
          </li>
          <li data-target="#carousel-thumb" data-slide-to="1">
            <img
              className="d-block w-100 img-fluid"
              src="https://i.ibb.co/9p3Cnk9/slider-2.jpg"
              alt="true"
            />
          </li>
          <li data-target="#carousel-thumb" data-slide-to="2">
            <img
              className="d-block w-100 img-fluid"
              src="https://i.ibb.co/sC4SgqP/slider-3.jpg"
              alt="true"
            />
          </li>
        </ol>
      </div>

      <Services></Services>
      <br />
      <br />
      <ShowOff></ShowOff>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
