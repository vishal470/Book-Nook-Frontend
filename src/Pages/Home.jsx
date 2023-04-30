import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Books from "./Books";

const Home = () => {
  return (
    <div>
      <div className="Home-Page text-white container-fluid d-flex justify-content-center align-items-center align-items-center">
        <div className="row container">
          <div
            className="col-lg-6 d-flex justify-content-center align-items-center align-items-start flex-column"
            style={{ height: "91.5vh" }}
          >
            <h2 style={{ fontSize: "80px",color:"#6453C2" }}>BOOKS STORE</h2>
            <h3 style={{ fontSize: "50px",color:"#6453C2" }}> FOR YOU</h3>
            <p className="mb-0" style={{ color: "black",fontStyle:"bold" }}>Check out the Books From Here.</p>
            <Link to="/books" className="viewBook my-3" style={{textDecoration:"0",color:"#6453C2",border:"2px solid #6453C2",borderRadius:"10px"}}>View Books</Link>
          </div>
          <div
            className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
            style={{ height: "91.5vh" }}
          >
            <img
            className="img-fluid homeimg"
            style={{borderRadius:"20px"}}
              src="https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHJlYWRpbmclMjBib29rfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <Books/>
    </div>
  );
};

export default Home;
