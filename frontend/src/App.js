import './App.css';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Dashbaord from './Routes/Dashboard/Dashboard';
import Blocks from './Routes/Blocks/Blocks';
import TimeTab from './Routes/Calender';
import Login from './Routes/Login/login';
import ClassDetail from './Routes/ClassDetail/ClassDetail';
import Classes from './Routes/Classes/Classes';
import Navv from './Component/Navbar';
import Timeline from './Routes/TimeLine/TimeLine'

const Layout = ({ children }) => {
  return (
    <>
      <Navv />
      <main>{children}</main>
    </>
  )
}


function App() {
  return (
    <>

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashbaord />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/Class/:block" element={<Classes />} />
            <Route path="/calender" element={<TimeTab />} />
            <Route path="/ClassDetail/:id" element={<ClassDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;