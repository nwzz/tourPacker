import React from "react";
import { Carousel } from "react-bootstrap";
import Services from "../Services/Services";
import caro1 from "../../images/travel-img/caro2.jpg";
import caro2 from "../../images/travel-img/caro5.jpg";
import caro3 from "../../images/travel-img/seabeach.jpg";
import DashBoard from "../DashBoard/DashBoard";
import ShowOff from "../ShowOff/ShowOff";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <div>
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
