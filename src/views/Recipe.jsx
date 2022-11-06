import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [activeTab, setActiveTab] = useState('Instructions');

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const fetchDetails = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
    );
    const data = await response.json();
    setRecipe(data);
  };

  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h2>{recipe.title}</h2>
        <motion.img
          src={recipe.image}
          alt={recipe.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </div>
      <Info>
        <Button
          className={activeTab === 'Instructions' ? 'active' : null}
          onClick={() => setActiveTab('Instructions')}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === 'Ingredients' ? 'active' : null}
          onClick={() => setActiveTab('Ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'Instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {activeTab === 'Ingredients' && (
          <ul>
            {recipe.extendedIngredients &&
              recipe.extendedIngredients.map((item) => {
                return <li key={item.id}>{item.original}</li>;
              })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled(motion.section)`
  display: flex;
  margin-top: 10rem;
  margin-bottom: 5rem;

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
