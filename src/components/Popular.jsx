import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section, Card, Gradient } from './styles';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const url = 'https://api.spoonacular.com/recipes/random?apiKey=';
  const getPopular = async () => {
    // free plan only allows 150 requests per day, so we will save data to localStorage.
    const checkPopularStorage = localStorage.getItem('popular');
    if (checkPopularStorage) {
      setPopular(JSON.parse(checkPopularStorage));
    } else {
      const response = await fetch(
        `${url}${process.env.REACT_APP_API_KEY}&number=10`,
      );
      const data = await response.json();
      setPopular(data.recipes);
      localStorage.setItem('popular', JSON.stringify(data.recipes));
    }
  };

  return (
    <Section>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <motion.img
                    src={recipe.image}
                    alt={recipe.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Section>
  );
}

export default Popular;
