import React from 'react';
import Directory from '../components/directory/directory.comp'
import './homepage.styles.scss';


const HomePage = ({history}) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage;
