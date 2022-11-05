import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Category from '../components/Category';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

function Views() {
  return (
    <LayoutWrapper>
      <header>Logo</header>
      <BrowserRouter>
        <Category />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
        </Routes>
      </BrowserRouter>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.main`
  margin: 0 10%;
`;

export default Views;
