import Home from './Home';
import Cuisine from './Cuisine';
import Category from '../components/Category';
import Search from '../components/Search';
import SearchResult from './SearchResult';
import Recipe from './Recipe';
// third-party imports
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// styles
import { AnimatePresence } from 'framer-motion';
import { GiKnifeFork } from 'react-icons/gi';
import styled from 'styled-components';

function Views() {
  return (
    <LayoutWrapper>
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork />
            Delicious
          </Logo>
        </Nav>
        <Search />
        <Category />
        <AnimatePresence>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searchResult/:search' element={<SearchResult />} />
            <Route path='/recipe/:id' element={<Recipe />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main`
  margin: 0 10%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;

  svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

export default Views;
