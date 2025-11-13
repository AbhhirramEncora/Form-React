// import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Home from './component/Home';
import Submit from './component/Submit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/submit' element={<Submit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
