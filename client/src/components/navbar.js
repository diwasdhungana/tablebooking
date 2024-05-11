import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { NavLink } from "reactstrap";

export default (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand
          className="nav-brand"
          onClick={(_) => {
            props.setPage(0);
          }}
        >
          Pizza Cabin
        </NavbarBrand>
        <NavLink
          className="nav-link"
          onClick={(_) => {
            props.setPage(3);
          }}
        >
          Your Booking
        </NavLink>
      </Navbar>
    </div>
  );
};
