import React, { Component } from 'react';
import { connect } from 'react-redux';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.comp';
import { createStructuredSelector } from 'reselect';
import { selectionCurrentSections } from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => {
  const leadingMenuItems = sections.slice(0,-1);
  const endMenuItem = sections.slice(-1);
  return (
    <div className='directory-menu'>
      <div className='directory-main'>
        {leadingMenuItems.map(({id, ...restSectionProps }) => (
          <MenuItem key={id} {...restSectionProps}/>
        ))}
      </div>
      <div className='directory-sub'>
        {endMenuItem.map(({id,...restSectionProps}) => (
          <MenuItem key={id} {...restSectionProps}/>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectionCurrentSections
})

export default connect(mapStateToProps)(Directory);


    // <div className='directory-menu'>
    //   {sections.map(({id, ...restSectionProps }) => (
    //     <MenuItem key={id} {...restSectionProps}/>
    //   ))}
    // </div>