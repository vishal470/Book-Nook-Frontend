import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "../components/BooksSection";
import SearchBar from "../components/SearchBar";

const Books = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://book-nook-backend.vercel.app/api/v1/getBooks")
        .then((res) => setData(res.data.books));
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(data);
    } else {
      const filteredBooks = data.filter(
        (book) =>
          book.bookname &&
          book.bookname.toLowerCase().includes(searchQuery.toLowerCase())
          ||
          book.author &&
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
          ||
          book.description &&
          book.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filteredBooks);
    }
  }, [data, searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`https://book-nook-backend.vercel.app/api/v1/deleteBook/${bookId}`);
      setData(data.filter((book) => book._id !== bookId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h3 style={{ fontSize: "35px", color: "#6453C2" }}>Book Section</h3>
      </div>
      <SearchBar
        searchQuery={searchQuery}
        handleInputChange={handleInputChange}
      />
      {filteredData.length > 0 ? (
        <BooksSection
          data={filteredData}
          onDelete={handleDeleteBook}
        />
      ) : (
        <div style={{ color: "#6453C2" }}>No books found.</div>
      )}
    </div>
  );
};

export default Books;
