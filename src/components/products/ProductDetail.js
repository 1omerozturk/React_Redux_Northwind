import React from 'react'
import TextInput from '../toolbox/Textinput'
import Selectinput from '../toolbox/Selectinput'
import { Link } from 'react-router-dom'

const ProductDetail = ({categories, product, onSave, onChange, errors}) => {
  return (
    <form onSubmit={onSave}>
      <h2 className='text-warning'>{product.id ? 'Product Update' : 'New Product Add'}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      />

      <Selectinput
        name="categoryId"
        label="Category"
        value={product.categoryId || ''}
        defaultOption="choose"
        options={categories.map(category=>({
            value:category.id,
            text:category.categoryName
            
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />
       <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      />
       <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      />
       <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      />

      <button  type="submit" className="btn btn-outline-primary my-3">
      <Link className='text-decoration-none' to="/">
        Save
      </Link>
      
      </button>
      
     
     
    </form>
  )
}

export default ProductDetail
