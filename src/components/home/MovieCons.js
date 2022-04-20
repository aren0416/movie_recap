import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../constand/urlConst";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/navigation";

const MovieCon = styled.div`
  margin-top: 120px;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Img = styled.div`
  height: 150px;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 20px;
`;

export const MovieCons = ({ title, movieData }) => {
  const params = {
    spaceBetween: 20,
    slidesPerView: 5.2,
  };

  return (
    <MovieCon>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} {...params} navigation>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={{ pathname: `/detail/${play.id}` }}>
              <Img
                style={{
                  background: `url(${IMG_URL}${play.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <MovieTitle>{play?.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieCon>
  );
};
