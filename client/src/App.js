import "./App.css";
import { Landing, Home, Detail, NotFound } from './views/index';
import FormCreate from "./views/FormCreate/FormCreate"
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/recipes' element={<Home/>}/>
        <Route exact path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<FormCreate/>}/>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
     </div>
  );
}

export default App;