import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const url = 'https://api.spoonacular.com/recipes/random?apiKey=';
  const getPopular = async () => {
    // free plan only allows 150 requests per day, so we will save data to local storage.
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
      console.log(data.recipes);
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
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Section>
  );
}

// styles
const Section = styled.section`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  p {
    position: absolute;
    z-index: 3;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
  }

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
