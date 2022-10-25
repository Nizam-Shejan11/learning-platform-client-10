import React from "react";
import { Button } from "react-bootstrap";
import MenuBar from "../Shared/MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row banner d-flex align-items-center justify-content-center">
          <MenuBar />
          <div className="col-6">
            <h1 className="title">
              break a leg <br /> in your SKILLS 📈
            </h1>
            <p className="text-white text-center mt-3">
              A comprehensive resource for Programming. <br />
              <small className="text-warning">
                new update* - the list of 100% full ride courses is published
              </small>
            </p>
            <Button variant="outline-success about-btn">who are we?</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
