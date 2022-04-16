import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
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
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
