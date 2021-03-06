import { PageTitle } from "../PateTitle";
import { movieApi } from "../../api";
import { useEffect, useState } from "react";
import { MainBanner } from "./MainBanner";
import { Section } from "../Section";
import { MovieCons } from "./MovieCons";

export const Home = () => {
  const [nowPlaying, setNowPlaying] = useState();
  const [popular, setPopular] = useState();
  const [upComing, setUpComing] = useState();

  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results: nowPlayingData },
      } = await movieApi.nowPlaying();
      setNowPlaying(nowPlayingData);

      const {
        data: { results: popularData },
      } = await movieApi.popular();
      setPopular(popularData);

      const {
        data: { results: upComingData },
      } = await movieApi.upComing();
      setUpComing(upComingData);
    };
    movieData();
  }, []);

  console.log("현재 상영 영화 : ", nowPlaying);
  //   console.log("인기 영화 : ", popular);
  //   console.log("개봉 예정 영화 : ", upComing);

  const bannerUrl = () => nowPlaying[0];

  return (
    <>
      <PageTitle title="Home" />
      {nowPlaying ? (
        <>
          <MainBanner bannerUrl={bannerUrl()} />
          <Section>
            {nowPlaying && (
              <MovieCons title="현재 상영 영화" movieData={nowPlaying} />
            )}
            {popular && <MovieCons title="인기 영화" movieData={popular} />}
            {upComing && (
              <MovieCons title="개봉 예정 영화" movieData={upComing} />
            )}
          </Section>
        </>
      ) : (
        "Loading"
      )}
    </>
  );
};
