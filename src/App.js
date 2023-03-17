import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom/dist';
import './App.css';
import route from './Routes/route';

function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
