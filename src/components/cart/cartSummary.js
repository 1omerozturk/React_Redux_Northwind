import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as cartActions from "../../redux/actions/cartActions"
import { Link } from 'react-router-dom'
import alertify from 'alertifyjs'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
  Badge,
} from 'reactstrap'
import { bindActionCreators } from 'redux'

class cartSummary extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " deleted the cart.")
      
    }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart <Badge className='bg-dark text-warning'>{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Badge onClick={()=>this.removeFromCart(cartItem.product)} color='danger'>X</Badge>
              {cartItem.product.productName}
              <Badge color='warning'>{cartItem.quantity} </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Go to Cart</Link> </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  renderEmpty() {
    return (
      <NavItem>
        <NavLink className="text-dark fw-bold">Empty Cart</NavLink>
      </NavItem>
    )
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions:{
      removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(cartSummary)
