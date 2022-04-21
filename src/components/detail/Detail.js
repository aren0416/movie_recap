import styled from "styled-components";
import { PageTitle } from "../PateTitle";
import { Section } from "../Section";
import { movieApi } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL } from "../../constand/urlConst";

const Container = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;

const Items = styled.div`
  width: 48%;
  height: 70vh;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 60vh;
    &:nth-child(2) {
      margin-top: 50px;
      height: auto;
    }
  }
`;

const Title = styled.h3``;

const Con = styled.div``;

const Genres = styled.ul``;

export const Detail = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState();

  useEffect(() => {
    const movieDetail = async () => {
      const { data } = await movieApi.detail(id);
      setDetailData(data);
    };
    movieDetail();
  }, []);

  console.log(detailData);

  return (
    <div>
      <PageTitle title="Detail" />
      <Section>
        <Container>
          {detailData ? (
            <>
              <Items
                style={{
                  background: `url(${IMG_URL}${detailData?.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <Items>
                <Title>{detailData?.title}</Title>
                <Con>개봉일: {detailData?.release_date}</Con>
                <Con>런타임: {detailData?.runtime}</Con>
                <Genres>
                  {detailData?.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </Genres>
              </Items>
            </>
          ) : (
            "Loading"
          )}
        </Container>
      </Section>
    </div>
  );
};
