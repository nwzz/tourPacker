import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ServiceDetails.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const ServiceDetails = () => {
  const { id } = useParams();
  //const location = useLocation();
  const [newService, setNewService] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `https://fierce-wave-16804.herokuapp.com/tours/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewService(data));
    //console.log(newService);
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://fierce-wave-16804.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.insertedId);
        if (data.insertedId) {
          alert("Order processed Successfully");
          reset();
          //location.push("/");
        }
      });
  };

  const image = newService.img;

  return (
    <div className="mt-5 container">
      <br />
      <br />

      <div className=" row d-flex">
        <div className="col-md-5">
          <br />
          {!newService._id ? (
            <h4>Please Select a Package First!!</h4>
          ) : (
            <h4 style={{ color: "darkblue" }}>
              Wow!! <span style={{ color: "tomato" }}>{newService.name}</span>{" "}
              Your Selected Package
            </h4>
          )}
          {
            <div
              className="d-flex service-decor "
              // style={{ backgroundImage: `url(${image})` }}
            >
              <div className="m-auto">
                <img
                  style={{ width: "999px", height: "270px" }}
                  className=""
                  src={newService.img}
                  alt=""
                />
              </div>
              <div className="d-grid justify-content-start align-content-center m-auto px-5">
                <h3>{newService.name}</h3>
                <p>
                  Package:{" "}
                  <span style={{ color: "tomato" }}>{newService.duration}</span>
                </p>
                <p>Price: ${newService.price}</p>
                <p>{newService.description}</p>
              </div>
            </div>
          }
        </div>
        <div
          className="col-md-1"
          style={{ borderRight: "1px solid cadetblue" }}
        ></div>
        <div className="form col-md-6 justify-content-start">
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <h4>
              <span style={{ color: "darkblue" }}>
                Please Register for Booking
              </span>
            </h4>
            <input
              placeholder="Your Package"
              defaultValue={newService.name}
              {...register("package")}
            />
            <input
              placeholder="Your Name"
              defaultValue={user.displayName}
              {...register("firstName")}
            />
            <input
              placeholder="Your Email"
              defaultValue={user.email}
              {...register("email")}
            />
            <input placeholder="Your Address" {...register("address")} />
            <input placeholder="Your City" {...register("city")} />
            <input
              placeholder="Reserve Date"
              type="date"
              {...register("reservationDate")}
            />
            <input placeholder="Your Contact No." {...register("phone")} />
            <input
              className="btn"
              style={{ backgroundColor: "tomato", color: "white" }}
              type="submit"
            />
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ServiceDetails;
