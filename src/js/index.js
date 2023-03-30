// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import cardImg from "../img/card-img.js"


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components
import Nav from "./component/home.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import { Card,CardContainer } from "./component/card.jsx";
import Footer from "./component/footer.jsx";


//render your react application
ReactDOM.render(
    <React.Fragment>
        <Nav />
        <Jumbotron />
        <CardContainer />
        <Footer />
    </React.Fragment>,
    document.querySelector("#app")
);
