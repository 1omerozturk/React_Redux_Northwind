// import { legacy_createStore as createStore} from 'redux'
// import { applyMiddleware } from 'redux'
// import rootReducer from './index'
// import thunk from "redux-thunk"


// export default function configureStore() {
//   return createStore(rootReducer,applyMiddleware(thunk))
// }

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index';

export default function configureStore(){
 
 return createStore( rootReducer,
  applyMiddleware(thunk))
 }
