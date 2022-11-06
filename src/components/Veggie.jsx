import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion } from 'framer-motion';
import { Section, Card, Gradient } from './styles';

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const url = 'https://api.spoonacular.com/recipes/random?apiKey=';
  const getVeggie = async () => {
    // free plan only allows 150 requests per day, so we will save data to localStorage.
    const checkVeggieStorage = localStorage.getItem('veggie');
    if (checkVeggieStorage) {
      setVeggie(JSON.parse(checkVeggieStorage));
    } else {
      const response = await fetch(
        `${url}${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`,
      );
      const data = await response.json();
      setVeggie(data.recipes);
      localStorage.setItem('veggie', JSON.stringify(data.recipes));
    }
  };

  return (
    <Section>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {veggie.map((recipe) => {
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

export default Veggie;
