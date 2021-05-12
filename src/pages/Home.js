import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <div className="row mt-0">
      <div className="col-6 m-auto">
        <h2 className="text-center">
          Welcome to Stay RnB! Please choose an option below to find
          your next room and board.
        </h2>
        <Carousel fade>
          <Carousel.Item>
            <img 
            className="d-block w-100 h-100"
            src="https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="An image of a room used from Unsplash.com"
            />
          </Carousel.Item>
          <Carousel.Item>
          <img 
            className="d-block w-100 h-100"
            src="https://images.unsplash.com/photo-1534595038511-9f219fe0c979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="An image of a room used from Unsplash.com"
            />
          </Carousel.Item>
          <Carousel.Item>
          <img 
            className="d-block w-100 h-100"
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            alt="An image of a room used from Unsplash.com"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
