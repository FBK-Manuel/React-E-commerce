import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Product from './components/product';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard';
// import Cart from './components/cart';
// import RootLayOut from './components/mainLayout/RootLayOut';
import RootMainLayer from './components/mainLayout/RootMainLayer';
import FirstDashboard from './components/firstDashboard';
import MainPageCart from './components/mainPageCart';
import Register from './components/signUp/register';
import Login from './components/signUp/login';
import TAndC from './components/signUp/t&c';
import NotFound from './components/NotFound';

import SignIn from './components/signUp/signIn';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootMainLayer />}>
    <Route index element={<FirstDashboard />}></Route>
    <Route path='/mainPageCart' element={<MainPageCart />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/signIn' element={<SignIn />}></Route>
    <Route path='/t&c' element={<TAndC />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>




    <Route path='*' element={<NotFound />}></Route>
  </Route>
))

// const routers = createBrowserRouter(createRoutesFromElements(
//   <Route path='/rootlayout' element={<RootLayOut />}>
//     
//     <Route path='/cart' element={<Cart />}></Route>
//   </Route>
// ))

function App() {
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
