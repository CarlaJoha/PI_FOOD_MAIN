import { Landing, Home, Detail, Form } from './views/index';
import { NavBar } from './components/index'
import { Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div>
      {
        location.pathname !== "/" && location.pathname !== '/detail' ? <NavBar/> : null
      }
        <Route exact path='/' component={Landing}/>
        <Route exact path='/recipes' component={Home}/>
        <Route exact path='/detail' component={Detail}/>
        <Route exact path='/form' component={Form}/>
   
     </div>
  );
}

export default App;

/*
* para pasar props a las rutas:
Ejemplo: <Route exact path='/form' render={<Form onClose={onClose} />}/>
* useLocation, retorna un objeto con propiedades una de ellas pathname, me sirve para hacer un renderizado condicional

*/
