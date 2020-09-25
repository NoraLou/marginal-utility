import React from 'react';
import Directory from '../../components/directory/directory.comp'
import { HomePageContainer } from './homepage.styles.jsx';


const HomePage = ({history}) => {
  return (
    <HomePageContainer >
      <Directory />
    </HomePageContainer>
  )
}

export default HomePage;
