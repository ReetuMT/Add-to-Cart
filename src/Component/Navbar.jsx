import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/CotnextProvide";



const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >
                Shopsy
              </Link>
            </li>
          </ul>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping" style={{ fontSize: 20 }}>
              {cart.length}
            </i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
