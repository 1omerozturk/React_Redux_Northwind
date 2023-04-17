import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList"


export default class Dashboard extends Component {
  render() {
    return (
      <div>
       
        <Row>
        <Col className='left' xs="3">
            <CategoryList/>
                
        </Col>
        
        <Col className='right' xs="9">
            <ProductList/>
        </Col>

        </Row>
      </div>
    )
  }
}
