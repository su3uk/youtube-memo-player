import './App.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import Watch from "./pages/Watch";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Home />
      <br />
      <Watch />
    </div>
  )
}

export default App;