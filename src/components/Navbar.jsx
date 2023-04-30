import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ borderBottom: "1px solid white",position:"fixed",top:"0",width:"100%",zIndex:"1" }}>
      <nav className="navbar navbar-expand-lg p-3" style={{backgroundColor:"#6453C2"}}>
        <div className="container">
          <Link to="/" className="navbar-brand text-white" href="#">
            Book NOOK
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-white" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link active text-white" to="/books">
                Books
              </Link>
              <Link className="nav-item nav-link active text-white" to="/addBooks">
                AddBooks
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
