import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/RootReducer";
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import  SetTransform  from './SetTransform';
import { persistStore , persistReducer } from "redux-persist";

const initialstate = {};

const persistConfig = {
    key: 'root',
    storage : storage ,
    transforms: [SetTransform]
  }
  const persistedReducer = persistReducer(persistConfig , rootReducer);
// const store = createStore(persistedReducer , rootReducer, initialstate, applyMiddleware(thunk));//reducer, initialstate, middleware

const store = createStore(
    persistedReducer ,
  //applyMiddleware(thunkMiddleware) 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
  )

store.subscribe(//called each time store is changed
    () => {
        // console.log('Store Updated..');
        // console.log(store.getState());
    }
);

const persistor = persistStore(store)

export  {persistor , store}