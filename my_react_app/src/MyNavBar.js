import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const links = [
  { href: '#', text: 'Page 1' },
  { href: '#', text: 'Page 2' },
  { href: '#', text: 'Page 3' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>{text}</NavLink>
  </NavItem>
);

export default class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">My React App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}


// import React from "react";
// import { Navbar, NavbarToggler, Nav, DropdownItem, Collapse, NavItem, DropdownMenu, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle } from 'reactstrap';

// const MyNavBar = (props) => {
//     return (
//         <>
//             <Navbar
//                 color="light"
//                 expand="md"
//                 light
//             >
//                 <NavbarBrand href="/">
//                     reactstrap
//                 </NavbarBrand>
//                 <NavbarToggler onClick={function noRefCheck() { }} />
//                 <Collapse navbar>
//                     <Nav
//                         className="me-auto"
//                         navbar
//                     >
//                         <NavItem>
//                             <NavLink href="/components/">
//                                 Components
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href="https://github.com/reactstrap/reactstrap">
//                                 GitHub
//                             </NavLink>
//                         </NavItem>
//                         <UncontrolledDropdown
//                             inNavbar
//                             nav
//                         >
//                             <DropdownToggle
//                                 caret
//                                 nav
//                             >
//                                 Options
//                             </DropdownToggle>
//                             <DropdownMenu right>
//                                 <DropdownItem>
//                                     Option 1
//                                 </DropdownItem>
//                                 <DropdownItem>
//                                     Option 2
//                                 </DropdownItem>
//                                 <DropdownItem divider />
//                                 <DropdownItem>
//                                     Reset
//                                 </DropdownItem>
//                             </DropdownMenu>
//                         </UncontrolledDropdown>
//                     </Nav>
//                 </Collapse>
//             </Navbar>
//         </>
//     )
// }

// export default MyNavBar;

