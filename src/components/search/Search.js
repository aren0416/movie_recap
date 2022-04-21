import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { IMG_URL } from "../../constand/urlConst";
import { PageTitle } from "../PateTitle";
import { Section } from "../Section";

const SSearch = styled.div`
  margin-top: 120px;
`;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 30px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 180px;
`;

const Title = styled.h4``;

export const Search = () => {
  const [searchData, setSearchData] = useState();

  const { register, handleSubmit, getValues } = useForm({
    mode: "onChange",
  });

  const onSubmit = async () => {
    const { term } = getValues();
    // console.log(await movieApi.search(term));
    const {
      data: { results },
    } = await movieApi.search(term);
    setSearchData(results);
  };

  console.log(searchData);

  return (
    <div>
      <PageTitle title="Search" />

      <Section>
        <SSearch>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("term", {
                required: true,
              })}
              type="text"
              placeholder="검색.."
              required
            />
            <Button>검색</Button>
          </Form>

          <ConWrap>
            {searchData && (
              <>
                {searchData.map((search) => (
                  <Link to={`/detail/${search.id}`} key={search.id}>
                    <Con>
                      <Bg
                        style={{
                          background: `url(${IMG_URL}${search.backdrop_path}) no-repeat center / cover`,
                        }}
                      />
                      <Title>{search.title}</Title>
                    </Con>
                  </Link>
                ))}
              </>
            )}
          </ConWrap>
        </SSearch>
      </Section>
    </div>
  );
};
