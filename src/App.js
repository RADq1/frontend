import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Form from './module/form';
import Home from './module/Home';
import Edit from './module/Edit';
import Navbar from './module/Navbar';
import List from './module/List';
import Login from './module/Login';
import Contact from './module/Contact';
import AdminPanel from './module/AdminPanel';
import Student from './module/Student';

import "./Css.css"

function App() {

   return (
     <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/list" element={<List/>}/>
         <Route path="/form" element={<Form/>}/>
         <Route path="/edit/:id" element={<Edit/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/student" element={<Student/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/admin" element={<AdminPanel/>}/>
       </Routes>
     </BrowserRouter>
   )
}

export default App;