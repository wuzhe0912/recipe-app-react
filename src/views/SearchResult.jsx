import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function SearchResult() {
  const [searchResult, setSearchResult] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    getSearchResult(search);
  }, [search]);

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
            <Link to={`/recipe/${result.id}`}>
              <motion.img
                src={result.image}
                alt={result.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              <h4>{result.title}</h4>
            </Link>
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
