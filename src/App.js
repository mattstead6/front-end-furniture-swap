import React from 'react';
import Home from './Home'
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import UserItemPage from "./UserItemPage";
// import { Link } from "react-router-dom";


function App() {
  return (
    <>
    <Home/>
    <Routes>
      <Route exact path="/useritempage" element={<UserItemPage />}></Route>
    </Routes>
    </>
  )
}

export default App;


