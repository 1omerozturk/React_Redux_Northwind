import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge,Button,Table} from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"
class ProductList extends Component {

  componentDidMount(){
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName + " added the cart.")
  }

  render() {
    return (
      <div>
        <h3>
          <Badge className='font-weight-bold fs-3 text-right' color="warning">Products</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <Table className='bg-info text-dark fs-6'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product=>(
             <tr key={product.id}>
             <th scope="row">{product.id}</th>
             <td>{product.productName}</td>
             <td>{product.unitPrice}</td>
             <td>{product.quantityPerUnit}</td>
             <td>{product.unitsInStock}</td>
            <td> <Button className='fst-italic lh-1 font-monospace' color='success' onClick={()=>this.addToCart(product)}>
              Add Cart
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
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts,
         dispatch),
         addToCart:bindActionCreators(cartActions.addToCart,
          dispatch)
    },
  }
}

export default connect(mapStateToProps, 
  mapDispatchToProps)(ProductList)
