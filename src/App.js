import Hero from "./pages/hero/hero"
import Home from "./pages/home/home"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from "./pages/login/login";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
