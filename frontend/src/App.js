import './App.css';
import { Routes, Route,BrowserRouter, } from "react-router-dom";
import Dashbaord from './Routes/Dashboard/Dashboard';
import Blocks from './Routes/Blocks/Blocks';
import TimeTab from './Routes/Calender';
import Login from './Routes/Login/login';
import ClassDetail from './Routes/ClassDetail';
import Classes from './Routes/Classes/Classes';
import Timeline from './Routes/TimeLine/TimeLine'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashbaord/>} />
            <Route path="/blocks" element={<Blocks/>} />
            <Route path="/Class/:block" element={<Classes />}/>
            <Route path="/calender" element={<TimeTab/>} />
            <Route path="/ClassDetail/:id" element={<ClassDetail/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/timeline" element={<Timeline/>} />

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;