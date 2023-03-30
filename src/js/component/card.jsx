import React from "react";

//create your first component
export const CardContainer = () => {
    return (
        <div className="row m-0">
        <div className="col-10 g-col-6 m-auto p-0 d-flex ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div> 
    </div>
    )
}



export const Card = () => {
	return (
        <div id="card" className="row m-0 grid gap-0">
            <div className="card g-col-2 mb-4 mt-4 p-0">
                <img className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
	);
}



