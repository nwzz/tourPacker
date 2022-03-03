import React from "react";

const Banner = () => {
  return (
    <div id="myCarousel" className="carousel slide">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="item active">
          <div
            className="fill"
            style={{
              backgroundImage:
                "http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg",
            }}
          ></div>
          <div className="carousel-caption">
            <h2 className="animated fadeInLeft">Caption Animation</h2>
            <p className="animated fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p className="animated fadeInUp">
              <a href="/" className="btn btn-transparent btn-rounded btn-large">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="item">
          <div
            className="fill"
            style={{
              backgroundImage:
                "http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg",
            }}
          ></div>
          <div className="carousel-caption">
            <h2 className="animated fadeInDown">Caption Animation</h2>
            <p className="animated fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p className="animated fadeInUp">
              <a href="/" className="btn btn-transparent btn-rounded btn-large">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="item">
          <div
            className="fill"
            style={{
              backgroundImage:
                "http://www.marchettidesign.net/demo/optimized-bootstrap/conference.jpg",
            }}
          ></div>
          <div className="carousel-caption">
            <h2 className="animated fadeInRight">Caption Animation</h2>
            <p className="animated fadeInRight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p className="animated fadeInRight">
              <a href="/" className="btn btn-transparent btn-rounded btn-large">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>

      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="icon-prev"></span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        data-slide="next"
      >
        <span className="icon-next"></span>
      </a>
    </div>
  );
};

export default Banner;
