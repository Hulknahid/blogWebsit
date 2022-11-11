import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { doLogout, getCurrentUserDetails, isLogged } from "../../auth";
import userContext from "../../Context/UserContext";

function CustomNavbar(args) {
  const userContextData = useContext(userContext);
  const navigator = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    setLogin(isLogged());
    setUser(getCurrentUserDetails());
  }, [login]);
  const logout = () => {
    doLogout(() => {
      setLogin(false);
      userContextData.setUser({
        data: null,
        login: false,
      });
      navigator("/");
    });
  };
  return (
    <div>
      <Navbar className="navbar-expand-sm navbar-dark bg-dark">
        <NavbarBrand tag={ReactLink} to="/">
          Blog Website
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/" tag={ReactLink}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={ReactLink}>
                About
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem to="/services" tag={ReactLink}>
                  Services
                </DropdownItem>
                <DropdownItem>Contact Us</DropdownItem>
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink to="/user/profileInfo" tag={ReactLink}>
                    Profile-Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/user/dashboard" tag={ReactLink}>
                    {user?.email}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
              </>
            )}
            {!login && (
              <>
                <NavItem>
                  <NavLink to="/login" tag={ReactLink}>
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/signup" tag={ReactLink}>
                    Sign Up
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
