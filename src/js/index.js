//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import cardImg from "../img/card-img.js"


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Nav from "./component/home.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";

//render your react application
ReactDOM.render(
    <React.Fragment>
        <Nav/>
        <Jumbotron />
        <div className="row m-0">
            <div className="col-10 d-flex m-auto p-0">
                <div className="row">
                    <Card className="col-3"/>
                    <Card className="col-3"/>
                    <Card className="col-3"/>
                    <Card className="col-3"/>
                </div>
            </div> 
        </div>
    </React.Fragment>,
    document.querySelector("#app"));
