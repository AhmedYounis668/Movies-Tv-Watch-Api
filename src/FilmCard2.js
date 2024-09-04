import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch, useSelector } from "react-redux";
import { Allmovies } from "./Redux/MoviesAction";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const FilmCard2 = () => {
  const [movies, setmovies] = useState([]);
  const [movie, setmovie] = useState([]);
  const [open, setOpen] = React.useState(false);

  const params = useParams();

  // set columns of show ilms in responsive and get the width of screen whene resize
  const [windowdimension, detectw] = useState({ winwidth: window.innerWidth });
  const [cols, setcols] = useState(10);

  const detectsize = () => {
    detectw({
      winwidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectsize);
    return () => {
      window.removeEventListener("resize", detectsize);
    };
  }, [windowdimension]);

  useEffect(() => {
    if (windowdimension.winwidth < 1024) {
      setcols(2);
    } else {
      setcols(10);
    }
  }, [windowdimension]);

  //get movies array
  const dispatch = useDispatch();

  const movy = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(Allmovies());
  }, []);

  useEffect(() => {
    setmovies(movy);
  }, [movy]);

  // ============================================= film details modal
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  // ==================================
  const getmoviedata = async () => {
    if (open === true) {
      const resonemovie = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=872b6f6702d22707bd5586523dc92a11&language=ar-US`
      );
      if (resonemovie && resonemovie.data) {
        setmovie(resonemovie.data);
        setmovies(movy);
      }
    } else if (open === false) {
      setOpen(false);
      setmovie([]);
      setmovies(movy);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getmoviedata();
    }, 1000);
  }, [open]);
  console.log(movie, "kkkkk");
  console.log(movies, "222");

  return (
    <div>
      {/* ================================================================ */}
      {/* Film Details modal */}
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Film Details</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <div>
                <img
                  alt="posetre film"
                  src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                  style={{ width: "100%", height: "650px" }}
                />
              </div>
              <div className="my-2">Film Name :{movie.original_title}</div>
              <div className="my-2">Film Country :{movie.origin_country}</div>
              <div className="my-2">
                Film Language :{movie.original_language}
              </div>
              <div className="my-2">status :{movie.status}</div>
              <div className="my-2">Release Date :{movie.release_date}</div>
              {}
              <hr />
              <div className="my-2">
                Production Country :
                {movie && movie.production_countries
                  ? movie.production_countries.map((country) => {
                      return (
                        <div className="d-flex flex-wrap mx-2">
                          {country.name}-
                        </div>
                      );
                    })
                  : null}
              </div>
              <hr />
              <div className="my-2">
                Film Genres :
                {movies && movies.genres
                  ? movies.genres.map((gen) => {
                      return (
                        <div className="d-flex flex-wrap mx-2">{gen.name}-</div>
                      );
                    })
                  : null}
              </div>
              <hr />
              <div className="my-2">Vote Average :{movie.vote_average}</div>
              <div className="my-2">Vote Count :{movie.vote_count}</div>
              <div className="my-2">popularity :{movie.popularity}</div>
              <div className="my-2">budget :{movies.budget}</div>
              <hr />
              <div className="my-2">Overview :{movie.overview}</div>
              <hr />
              <div className="my-2">
                Production companies :
                {movie && movie.production_companies
                  ? movie.production_companies.map((company) => {
                      return (
                        <div className="d-flex flex-wrap mx-2">
                          {company.name}-
                        </div>
                      );
                    })
                  : null}
              </div>
              <hr />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <a href={movies.homepage}>
              <Button variant="outlined">Watch Now</Button>
            </a>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      {/* ======================================================================== */}
      <ImageList sx={{ width: "100%", height: "100%" }}>
        <ImageListItem key="Subheader" cols={cols}>
          <ListSubheader component="div">
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Let's Go To Discover Our Movies
            </div>
          </ListSubheader>
        </ImageListItem>
        {movy
          ? movy.map((item) => (
              <ImageListItem
                key={`https://image.tmdb.org/t/p/w500/` + item.poster_path}
              >
                <img
                  srcSet={`${
                    `https://image.tmdb.org/t/p/w500/` + item.poster_path
                  }?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${
                    `https://image.tmdb.org/t/p/w500/` + item.poster_path
                  }?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <Link to={`/movie/${item.id}`}>
                  <ImageListItemBar
                    title={item.title}
                    //   subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.title}`}
                        onClick={handleClickOpen("paper")}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </Link>
              </ImageListItem>
            ))
          : null}
      </ImageList>
    </div>
  );
};

export default FilmCard2;
