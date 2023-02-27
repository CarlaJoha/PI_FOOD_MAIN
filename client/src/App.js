import { Landing, Home, Detail, Form, NotFound } from './views/index';
import  NavBar  from './components/NavBar/NavBar';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div>
      {
        location.pathname !== "/" && location.pathname !== '/detail' ? <NavBar/> : null
      }
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/recipes' component={Home}/>
        <Route exact path='/detail/:id' component={Detail}/>
        <Route exact path='/form' component={Form}/>
        <Route path="*" component={NotFound}></Route>
        <Redirect to="/" />
      </Switch>
     </div>
  );
}

export default App;

/*
* para pasar props a las rutas:
Ejemplo: <Route exact path='/form' render={<Form onClose={onClose} />}/>
* useLocation, retorna un objeto con propiedades una de ellas pathname, me sirve para hacer un renderizado condicional

*/
