import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

// REDUX DEVTOOLS para conectar con la extensión del navegador
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// CONFIGURACION DEL NAVEGADOR para poder hacer peticiones a un server 
const store = createStore( reducer, composeEnhancer(applyMiddleware(thunkMiddleware)) 
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

applyMiddleware: permite hacer las peticiones a la API
compose: permite hacer la conexión con la extención del navegador
 */