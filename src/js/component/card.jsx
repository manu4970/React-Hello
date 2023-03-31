import React from "react";

//create your first component
const CardContainer = () => {
  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between mt-5 gap-4 mb-4 mx-2 ">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className="card">
      <span
        id="imgCard"
        className="text-secondary fs-4 text-center d-flex align-items-center justify-content-center"
      >
        310 x 200
      </span>
      <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <a
          href="#"
          className="btn btn-primary d-flex justify-content-center mx-5"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardContainer;
