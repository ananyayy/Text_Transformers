import React from "react";
import PropTypes from  'prop-types';
export default function Navbar(props){

    return(
<nav className="navbar navbar-expand-lg " style={{backgroundColor: "#ffc107"}}>

        
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
       {/* <div class="btn-group" role="group" aria-label="Basic mixed styles example"> */}
  {/* <button type="button" class="btn btn-light" onClick={props.changemode}>Light</button> */}
  {/* <button type="button" class="btn btn-dark" onClick={props.changemode}>Dark</button>
</div> */}
<div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changemode}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
</nav>
    );
}
Navbar.propTypes={
    title: PropTypes.string, 
    AboutUs: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Title", 
    AboutUs: "About Us",
}

