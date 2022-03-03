import {
  faCar,
  faHome,
  faPeopleArrows,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import show from "../../images/show.jpg";

const ShowOff = () => {
  return (
    <>
      <div className="row  mx-auto">
        <div
          style={{ backgroundColor: "blanchedalmond" }}
          className="d-grid col-md-6"
        >
          <h3 className="mt-5">Why Booking With Us</h3>
          <h5 style={{ color: "gray", marginTop: "0" }}>
            There are several seasons that you must travel with us
          </h5>
          <div className="d-flex justify-content-start gap-5">
            <FontAwesomeIcon icon={faPeopleArrows} size="3x" />
            <h5 style={{ color: "tomato" }}>
              We Provide World class Guides for our valuable Tourist.
            </h5>
          </div>
          <div className="d-flex justify-content-start gap-5">
            <FontAwesomeIcon icon={faHome} size="3x" />
            <h5 style={{ color: "tomato" }}>
              We Provide World class Quality accommodation for our valuable
              Tourist.
            </h5>
          </div>
          <div className="d-flex justify-content-start gap-5">
            <FontAwesomeIcon icon={faCar} size="3x" />
            <h5 style={{ color: "tomato" }}>
              We Provide World class Transport Facilities for our valuable
              Tourist.
            </h5>
          </div>
        </div>
        <div className="col-md-6">
          <img src={show} alt="" />
        </div>
      </div>
    </>
  );
};

export default ShowOff;
