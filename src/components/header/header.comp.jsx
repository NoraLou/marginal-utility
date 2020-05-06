import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.comp.jsx';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shoppage'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {
          currentUser ?
          <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/sign'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps,null)(Header);