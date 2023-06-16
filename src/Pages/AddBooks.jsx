import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

  const AddBooks = () => {
    const [Data, setData] = useState({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
    });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]:value });
    console.log(e.target.name);
    console.log(e.target.value);
  };
  const submit= async(e)=>{
    e.preventDefault();
    await axios.post("https://book-nook-backend.vercel.app/api/v1/add",Data)
    .then((res)=>console.log(res));
    setData({
      bookname: "",
      author: "",
      description: "",
      image: "",
      price: "",
    });
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container p-4">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-black"
            style={{fontSize:"20px",fontStyle:"Bold"}}
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            style={{border:'2px solid #6453C2'}}
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
            name="bookname"
            value={Data.bookname}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-black"
            style={{fontSize:"20px",fontStyle:"Bold"}}
          >
            Author
          </label>
          <input
            type="text"
            className="form-control"
            style={{border:'2px solid #6453C2'}}
            id="exampleFormControlInput1"
            placeholder="Enter Author Name"
            name="author"
            value={Data.author}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-black"
            style={{fontSize:"20px",fontStyle:"Bold"}}
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            style={{border:'2px solid #6453C2'}}
            id="exampleFormControlInput1"
            placeholder="Enter Description"
            name="description"
            value={Data.description}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-black"
            style={{fontSize:"20px",fontStyle:"Bold"}}
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            style={{border:'2px solid #6453C2'}}
            id="exampleFormControlInput1"
            placeholder="Enter URL"
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-black"
            style={{fontSize:"20px",fontStyle:"Bold"}}
          >
            Price
          </label>
          <input
            type="text"
            className="form-control"
            style={{border:'2px solid #6453C2'}}
            id="exampleFormControlInput1"
            placeholder="Enter The Price"
            name="price"
            value={Data.price}
            onChange={change}
          />
        </div>
        <Link to="/books">
        <button className="btn" style={{backgroundColor:"#6453C2",color:"#fff"}} onClick={submit}> Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default AddBooks;
