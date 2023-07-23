import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import StorePage from "./Components/Products/StorePage";
import About from './Components/AboutPage/About';
import Home from './Components/HomePage/Home';

const router= createBrowserRouter([
  {path:'/',element:<StorePage/>},
  {path:'/AboutPage/About',element:<About/>},
  {path:'/Homepage/Home',element:<Home/>}

])
const App = () => {
 
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
