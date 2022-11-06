import Home from './Home';
import Cuisine from './Cuisine';
import Category from '../components/Category';
import Search from '../components/Search';
import SearchResult from './SearchResult';
// third-party imports
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// styles
import styled from 'styled-components';

function Views() {
  return (
    <LayoutWrapper>
      <header>Logo</header>
      <BrowserRouter>
        <Search />
        <Category />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searchResult/:search' element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main`
  margin: 0 10%;
`;

export default Views;
