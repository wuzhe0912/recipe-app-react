import { useState } from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  const [categories] = useState([
    {
      name: 'Japanese',
      icon: <GiNoodles />,
    },
    {
      name: 'Italian',
      icon: <FaPizzaSlice />,
    },
    {
      name: 'American',
      icon: <FaHamburger />,
    },
    {
      name: 'Korean',
      icon: <GiChopsticks />,
    },
  ]);

  return (
    <List>
      {categories.map((category) => {
        return (
          <li key={category.name}>
            <SLink to={`/cuisine/${category.name}`}>
              <span>{category.icon}</span>
              <h4>{category.name}</h4>
            </SLink>
          </li>
        );
      })}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  text-decoration: none;
  margin-right: 2rem;
  transform: scale(0.8);
  transition: all 0.3s ease-in-out;

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f83600, #f9d423);
  }
`;

export default Category;
