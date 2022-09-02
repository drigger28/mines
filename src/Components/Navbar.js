import React from "react";
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <div>
        <ul class="nav nav-pills">
        <li class="nav-item">
         
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="Home" role="button" aria-expanded="false">Home</a>
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="Product" role="button" aria-expanded="false">Product</a>
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="Contact" role="button" aria-expanded="false">Contact Us</a>
          <ul class="dropdown-menu">
            
            
          </ul>
        </li>
  
      </ul>
      </div>
    );
};

export default Navbar;
