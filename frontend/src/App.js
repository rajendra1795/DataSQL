import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import AddEdit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <ToastContainer position="top-center"/>
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/addData" element = {<AddEdit/>}/>
        <Route path = "/update/:CommissionEntryId" element = {<AddEdit/>}/>
        <Route path = "/view/:CommissionEntryId" element = {<View/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

