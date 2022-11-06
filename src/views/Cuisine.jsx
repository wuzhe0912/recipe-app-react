import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function Cuisine() {
  const [cuisines, setCuisines] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=';
  const getCuisine = async (name) => {
    // free plan only allows 150 requests per day, so we will save data to localStorage.
    const checkCuisineStorage = localStorage.getItem(name);
    if (checkCuisineStorage) {
      setCuisines(JSON.parse(checkCuisineStorage));
    } else {
      const response = await fetch(
        `${url}${process.env.REACT_APP_API_KEY}&cuisine=${name}`,
      );
      const data = await response.json();
      setCuisines(data.results);
      localStorage.setItem(name, JSON.stringify(data.results));
      console.log('Cuisine', cuisines);
    }
  };

  return (
    <Grid>
      {cuisines.map((cuisine) => {
        return (
          <Card key={cuisine.id}>
            <Link to={`/recipe/${cuisine.id}`}>
              <motion.img
                src={cuisine.image}
                alt={cuisine.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </Link>
            <h4>{cuisine.title}</h4>
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

export default Cuisine;
