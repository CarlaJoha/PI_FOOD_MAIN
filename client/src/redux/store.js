import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// Conecto con la extensión del navegador => REDUX DEVTOOLS 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// CONFIGURACION DEL NAVEGADOR para poder hacer peticiones a un server 
const store = createStore( reducer, composeEnhancer(applyMiddleware(thunk)) 
);

export default store;

/*
Sin tener que agregar la linea de composeEnhancer...
compose puede sustituirse por :

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)) 
);
export default store;
 */
