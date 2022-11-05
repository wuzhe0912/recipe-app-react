import React from 'react';
import Veggie from '../components/Veggie';
import Popular from '../components/Popular';

function Home() {
  return (
    <div className='home-wrapper'>
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
