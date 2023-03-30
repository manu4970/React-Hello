import React from "react";

//create your first component
const Jumbotron = () => {
  return (
    <div>
      <div id="jumContainer" className="px-4 py-5 my-4 mx-2 rounded">
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Call to action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
