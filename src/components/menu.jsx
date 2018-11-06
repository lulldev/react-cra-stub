import React from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Menu = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink>
            <Link to={'/'}>Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to={'/posts'}>Posts</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Menu;