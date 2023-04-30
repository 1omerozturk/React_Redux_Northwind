import React from 'react'
import TextInput from '../toolbox/Textinput'
import Selectinput from '../toolbox/Selectinput'

const ProductDetail = ({categories, product, onSave, onChange}) => {
  return (
    <form onSubmit={onSave}>
      <h2 className='text-warning'>{product.id ? 'Product Update' : 'New Product Add'}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error={'Error!'}
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
        error="Error!"
      />
       <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error={'Error!'}
      />
       <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={'Error!'}
      />
       <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error={'Error!'}
      />

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  )
}

export default ProductDetail
