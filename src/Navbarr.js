import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Typewriter } from "react-simple-typewriter";
import logo from "./images/cinema log.png";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import TextField from "@mui/material/TextField";
import { Allmovies, Allmoviessearch } from "./Redux/MoviesAction";
import { useDispatch, useSelector } from "react-redux";

const Navbarr = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchword, setsearchword] = useState("");

  const onsearchchange = (e) => {
    setsearchword(e.target.value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchword === "") {
      dispatch(Allmovies());
    } else {
      dispatch(Allmoviessearch(searchword));
    }
  }, [searchword]);

  const res = useSelector((state) => state.movies);
  return (
    <div>
      {/* for search */}
      <Offcanvas
        style={{ height: "150px" }}
        placement="top"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <Typewriter
              words={[" Search About Your Favourate Movies 🧡🧡"]}
              loop={1}
              cursor
              cursorStyle="🧡"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TextField
            className="w-100"
            id="standard-basic"
            label="Search Here"
            variant="standard"
            onChange={onsearchchange}
            value={searchword}
          />
        </Offcanvas.Body>
      </Offcanvas>
      {/* ====================================== */}
      <Navbar bg="" data-bs-theme="dark" className="navbarstyle">
        <Container>
          <div className="w-100 me-auto d-flex justify-content-between">
            <div
              style={{ marginTop: "20px", cursor: "pointer" }}
              onClick={handleShow}
            >
              <SearchIcon />
            </div>
            <Nav.Link
              href="#/"
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              <div style={{ border: "2px solid red", marginLeft: "10px" }}>
                <Typewriter
                  words={[" Welcom To Movies TV 🧡", " Movies TV "]}
                  loop={1}
                  cursor
                  cursorStyle="🧡"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />{" "}
              </div>
            </Nav.Link>
            <Nav.Link href="/">
              <div style={{ width: "40px", color: "red" }}>
                <img
                  style={{
                    height: "48px",
                    color: "red",
                    
                  }}
                  alt="logo"
                  src={logo}
                />
              </div>
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
