import React from "react";


//create your first component
const Jumbotron = () => {
	return (
        <div className="row m-0">
            <div  className="mt-4 p-0 bg-body-tertiary rounded-3 col-10 m-auto">
                <div id="jumContainer" className="container-fluid py-5 bg-body-tertiary">
                    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
        </div>
	);
}

export default Jumbotron;