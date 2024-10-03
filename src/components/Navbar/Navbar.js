import React from 'react';
import { Nav, NavContainer, Logo, NavLinks, NavLink } from './Navbar.style';


const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Virtual Library</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/my-library">My Library</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;