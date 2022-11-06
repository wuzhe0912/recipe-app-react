import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function SearchResult() {
  const [searchResult, setSearchResult] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearchResult(params.search);
  }, [params.search]);

  const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';
  const getSearchResult = async (name) => {
    const response = await fetch(
      `${url}${process.env.REACT_APP_API_KEY}&query=${name}`,
    );
    const data = await response.json();
    setSearchResult(data.results);
  };

  return (
    <Grid>
      {searchResult.map((result) => {
        return (
          <Card key={result.id}>
            <img src={result.image} alt={result.title} />
            <h4>{result.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchResult;
