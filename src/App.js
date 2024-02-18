import Hero from "./pages/hero/hero"
import Home from "./pages/home/home"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
