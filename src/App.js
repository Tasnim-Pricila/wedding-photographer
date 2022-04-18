import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signup from './components/Signup/Signup';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className='container mx-auto'>
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/blogs' element={<Blog></Blog>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/checkout/:serviceId' element={
              <RequireAuth>
                <Checkout></Checkout>
              </RequireAuth> 
            }></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
