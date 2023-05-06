import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
  import { Link } from 'react-router-dom';
import CartSummary from '../cart/cartSummary';
export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="info" light expand="md">
          <NavbarBrand  className='rounded-circle bg-light text-muted fs-2 fw-bold'><Link className='text-dark text-decoration-none fw-bold' to="/">Northwind App Store</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link className='text-dark text-decoration-none fw-bold' to="/saveProduct">Product Add</Link></NavLink>
              </NavItem>
       
             <CartSummary/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}