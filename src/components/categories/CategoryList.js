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
        <Badge className='font-weight-bold fs-3 text-left text-dark 'color='warning'>
          Categories</Badge></h3>
        <ListGroup className='bg-dark' >
          {this.props.categories.map((category) => (
           
            <ListGroupItem
            className='bg-dark list-group-item list-group-item-action activelist-group-item list-group-item-action list-group-item-light'
              active={category.id === this.props.currentCategory.id}
              onClick={()=>this.selectCategory(category)}
              key={category.id}
            >
                <a href='#' className='bg-dark text-warning fs-5 text-decoration-none'>
                {category.categoryName}
                </a>
            
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
