import React, { Component } from 'react';
import { connect } from 'react-redux';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.comp';
import { createStructuredSelector } from 'reselect';
import { selectionCurrentSections } from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => {
  return (
    <div className='directory-menu'>
      {sections.map(({id, ...restSectionProps }) => (
        <MenuItem key={id} {...restSectionProps}/>
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectionCurrentSections
})

export default connect(mapStateToProps)(Directory);
