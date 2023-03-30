// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// import cardImg from "../img/card-img.js"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Nav from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import CardContainer from "./component/card.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(
  <React.Fragment>
    <Nav />
    <div className="container p-0">
      <Jumbotron />
      <CardContainer />
    </div>
    <Footer />
  </React.Fragment>,
  document.querySelector("#app")
);
