import styled from "styled-components";
import { IMG_URL } from "../../constand/urlConst";

const SMainBanner = styled.section`
  height: 80vh;
  padding: 250px 0 0 80px;
  position: relative;
`;

const Title = styled.h3`
  position: relative;
  z-index: 99;
  font-size: 70px;
  font-weight: 700;
  max-width: 550px;
  width: 100%;
`;

const Desc = styled.p`
  position: relative;
  z-index: 99;
  max-width: 550px;
  width: 100%;
  margin-top: 50px;
  line-height: 1.8rem;
  opacity: 0.7;
  font-size: 18px;
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(0deg, #1d1d1d, transparent);
`;

export const MainBanner = ({ bannerUrl }) => {
  return (
    <SMainBanner
      style={{
        background: `url(${IMG_URL}/${bannerUrl.backdrop_path}) no-repeat center / cover`,
      }}
    >
      <Title>{bannerUrl.title}</Title>
      <Desc>{bannerUrl.overview.slice(0, 100) + "..."}</Desc>
      <BlackBg />
    </SMainBanner>
  );
};
