import { combineReducers } from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
import saveProductReducer from './saveProductReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  saveProductReducer,
  cartReducer,
})

export default rootReducer;
