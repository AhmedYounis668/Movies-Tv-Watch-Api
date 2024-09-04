import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import FilmCard from "./FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { Allmovies } from "./Redux/MoviesAction";

const Slider = () => {
  const [movies, setmovies] = useState([]);

  const dispatch = useDispatch();

  const movy = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(Allmovies());
  }, []);

  useEffect(() => {
    setmovies(movy);
  }, [movy]);
  console.log(movies);
  return (
    <div className="swipercontainer">
      <Container>
        <Row className="">
          <Col>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper"
            >
              {movy
                ? movy.map((item) => {
                    return (
                      <SwiperSlide>
                        <FilmCard
                          image={
                            `https://image.tmdb.org/t/p/w500/` +
                            item.poster_path
                          }
                        />
                      </SwiperSlide>
                    );
                  })
                : null}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
