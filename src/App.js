import React , {useState} from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter ,  Route, Routes  , Navigate, Outlet} from "react-router-dom";
// import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'
import Foot from './components/Foot';
import Home2 from './components/Home2';
import Admin from './Admin/Admin';
import AdminPanel from './Admin/AdminPanel';



const PrivateRoute = ({ isUserAuth,  ...props }) => {
  return isUserAuth ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate replace to='/Admin' />
  );
};

export default function App() {
  const [isUserAuth, setIsUserAuth] = useState(false);

  return (

    <>
  <BrowserRouter>
     <NavBar/>



     <Routes>
      <Route path='/' element={<Home2/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/Admin' element={<Admin setIsUserAuth={setIsUserAuth} />} />


      <Route path='/AdminPanel' element={<PrivateRoute isUserAuth={isUserAuth} setIsUserAuth={setIsUserAuth} />}>
              <Route path='/AdminPanel' element={<AdminPanel/>} />
      </Route>

     </Routes>

<Foot/>

  </BrowserRouter>

    </>
  )
}
