import React from 'react';

import { HomePageContainer } from './homepage.styles';
import Slideshow from '../../components/slideshow/slideshow.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <HomePageContainer>
    <Slideshow />
    <h2>خدمات دندانپزشکی</h2>
    <Directory/>
  </HomePageContainer>
);

export default HomePage;