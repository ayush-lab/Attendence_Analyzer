import './App.css';
import { Routes, Route,BrowserRouter, } from "react-router-dom";
import Dashbaord from './Routes/Dashboard/Dashboard';
import Classes from './Routes/Classes/Classes';
import TimeTab from './Routes/Calender';
import Login from './Routes/Login/login';
import ClassDetail from './Routes/ClassDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashbaord/>} />
            <Route path="/classes" element={<Classes/>} />
            <Route path="/calender" element={<TimeTab/>} />
            <Route path="/ClassDetail" element={<ClassDetail/>} />
            <Route path="/login" element={<Login/>} />


          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;