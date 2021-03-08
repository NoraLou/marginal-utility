import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/interface.svg';
import { Link } from'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon.comp.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.comp';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <div className='container'>
        <nav className='nav-links'>
        <Link className='logo-container' to="/">
          <Logo className='logo'/>
        </Link>

        <div className='nav-options'>
          {
            currentUser ?
            <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option auth-out' to='/sign-in'>SIGN IN</Link>
          }
          <div className='option'>
            <CartIcon />
          </div>
        </div>

        </nav>
          {
            hidden ?
            null
            :
            <CartDropdown />
          }
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps,null)(Header);