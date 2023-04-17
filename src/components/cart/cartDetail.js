import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as cartActions from "../../redux/actions/cartActions"
import { bindActionCreators } from 'redux'
import {Table ,Button} from "reactstrap"

class cartDetail extends Component {
removeFromCart(product){
this.props.actions.removeFromCart(product);
}

  render() {
    return (
      <div className='mt-5'>
        <h1 className='mt-5 text-warning fw-bold text-center'>Sepet</h1>
        <Table className='bg-info text-dark fs-6'>
        <thead>
          <tr>
            <th>#</th>
            <th>cartItem Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map(cartItem=>(
             <tr key={cartItem.product.id}>
             <th scope="row">{cartItem.product.id}</th>
             <td>{cartItem.product.productName}</td>
             <td>{cartItem.product.unitPrice}</td>
             <td>{cartItem.quantity}</td>
             
            <td> <Button className='fst-italic lh-1 font-monospace' color='danger' onClick={()=>this.removeFromCart(cartItem.product)}>
             Delete Cart
              </Button> </td>
           </tr>
        ))}
         
        </tbody>
      </Table>
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

export default connect(mapStateToProps,mapDispatchToProps)(cartDetail)
