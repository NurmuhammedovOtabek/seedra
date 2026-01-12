import React from 'react';
import MainLayout from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App(props) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;