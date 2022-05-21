import React from 'react';
import './App.css';
import Header from './templates/Header';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
    </BrowserRouter>
  );
}

export default App;
