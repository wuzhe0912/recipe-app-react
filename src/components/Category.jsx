import { useState } from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  const [categories] = useState([
    {
      name: 'pizza',
      icon: <FaPizzaSlice />,
    },
    {
      name: 'burger',
      icon: <FaHamburger />,
    },
    {
      name: 'noodles',
      icon: <GiNoodles />,
    },
    {
      name: 'chinese',
      icon: <GiChopsticks />,
    },
  ]);

  return (
    <List>
      {categories.map((category) => {
        return (
          <li key={category.name}>
            <NavLink to={`/cuisine/${category.name}`}>
              <span>{category.icon}</span>
              <h4>{category.name}</h4>
            </NavLink>
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

export default Category;
