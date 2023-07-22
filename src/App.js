import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import StorePage from "./Components/Products/StorePage";
import About from './Components/AboutPage/About';

const router= createBrowserRouter([
  {path:'/',element:<StorePage/>},
  {path:'/AboutPage/About',element:<About/>},

])
const App = () => {
 
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
