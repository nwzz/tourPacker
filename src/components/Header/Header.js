import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="">
      <Navbar bg="light" sticky="top" collapseOnSelect expand="lg">
        <Container className="d-flex">
          <div className="justify-content-start ms-3">
            <a style={{ textDecoration: "none" }} href="/">
              <h1>
                <span style={{ color: "tomato" }}>TourPacker</span>
              </h1>
            </a>
          </div>
          <Nav className="justify-content-center d-flex gap-3 ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home/#services">
              Popular Trips
            </Nav.Link>
            <Nav.Link as={Link} to="/booking">
              Bookings
            </Nav.Link>
            <Nav.Link as={Link} to="/blog/">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors/">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us/">
              About Us
            </Nav.Link>
          </Nav>
          <div className="d-flex justify-content-end gap-3">
            {!user.email && (
              <Link to="/register">
                <button
                  style={{ backgroundColor: "cadetblue", color: "white" }}
                  className="btn"
                >
                  Register
                </button>
              </Link>
            )}

            {user.email ? (
              <span>
                <button
                  onClick={logOut}
                  className="btn"
                  style={{ backgroundColor: "tomato", color: "white" }}
                >
                  Logout
                </button>
                <span style={{ marginLeft: "10px" }}>{user.email}</span>
              </span>
            ) : (
              <Link to="/login">
                <button className="btn btn-danger">Login</button>
              </Link>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
