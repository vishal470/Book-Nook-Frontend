import "./App.css";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
    <Router>
      <Navbar/>
      <br></br>
      <br></br>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/addBooks" element={<AddBooks/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
