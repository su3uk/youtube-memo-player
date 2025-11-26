import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;