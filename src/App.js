import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Form from './module/form';
import Home from './module/Home';
import Edit from './module/Edit';
import Navbar from './module/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/edit/:employeeId" component={Edit} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;