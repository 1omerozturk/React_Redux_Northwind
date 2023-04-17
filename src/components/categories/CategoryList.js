import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import { ListGroup, ListGroupItem,Badge} from 'reactstrap'
import * as productActions from "../../redux/actions/productActions"

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories()
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  };

  render() {
    return (
      <div className=''>
        <h3> 
        <Badge className='font-weight-bold fs-3 text-left'color='warning'>
          Categories</Badge></h3>
        <ListGroup className='bg-info' >
          {this.props.categories.map((category) => (
            <ListGroupItem
            className='bg-info'
              active={category.id === this.props.currentCategory.id}
              onClick={()=>this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
    currentCategory: state.changeCategoryReducer,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch,
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch,
      ),
      getProducts: bindActionCreators(productActions.getProducts,
        dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
