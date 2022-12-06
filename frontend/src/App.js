import './App.css';
import { Routes, Route,BrowserRouter, } from "react-router-dom";
import Dashbaord from './Routes/Dashboard/Dashboard';
import Classes from './Routes/Classes/Classes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashbaord/>} />
            <Route path="/classes" element={<Classes/>} />

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;