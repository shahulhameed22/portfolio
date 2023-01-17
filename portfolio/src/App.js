import logo from './logo.svg';
import './App.css';
import { Fakestore } from './components/fakestore';
import { Cardview } from './components/cardview';
import {Assessment} from './components/assessment';
import { Crud } from './components/crud.js/crud';
// 

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { PortHome } from './components/portfolio/home';
// import { PortNav } from './components/Portfolio/portnav';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Cardview/>}/> */}
        {/* <Route path='/home' element={<Home/>}/> */}
        <Route path='/' element={<Crud/>}/>

      
      </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
