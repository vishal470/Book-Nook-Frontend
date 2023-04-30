import React from "react";

const BooksSection = ({ data, onDelete }) => {
  const handleDelete = (bookId) => {
    onDelete(bookId);
  };

  return (
    <div className="d-flex justify-content-around align-center flex-wrap">
      {data &&
        data.map((item, index) => (
          <div
            key={item._id}
            className="card m-3"
            style={{
              width: "200px",
              height: "430px",
              borderRadius: "20px",
              border: "2px solid #6453C2",
            }}
          >
            <div>
              <img
                src={item.image}
                style={{
                  width: "200px",
                  height: "210px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  borderBottom: "2px solid #6453C2",
                }}
                className="card-img-top img-fluid"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h6 className="card-title">{item.bookname.slice(0, 20)}...</h6>
              <b>
                <p className="card-text" style={{ fontSize: "18px" }}>
                  Price :- Rs.{item.price}
                </p>
              </b>

              <p style={{ fontSize: "12px" }}>
                <b>Description:- </b>
                {item.description.slice(0, 40)}.....
              </p>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
