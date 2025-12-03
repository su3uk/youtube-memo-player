import { Routes, Route } from 'react-router-dom'; // 1. BrowserRouter 삭제
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {  
  return (
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
        <Route path="/watch/:videoId" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;