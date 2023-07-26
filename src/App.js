import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import StorePage from "./Components/Products/StorePage";
import About from "./Components/AboutPage/About";
import Home from "./Components/HomePage/Home";
import Contactus from "./Components/ContactUs/Contactus";
import UniqueProduct1 from "./Components/Products/SeperateProduct/UniqueProduct1";
import UniqueProduct2 from "./Components/Products/SeperateProduct/UniqueProduct2";
import UniqueProduct3 from "./Components/Products/SeperateProduct/UniqueProduct3";
import UniqueProduct4 from "./Components/Products/SeperateProduct/UniqueProduct4";

const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<StorePage />} />
    <Route path="/AboutPage/About" element={<About />} />
    <Route path="/Homepage/Home" element={<Home />} />
    <Route path="/ContactUs/Contactus" element={<Contactus />} />
    <Route path="/Products/SeperateProduct/UniqueProduct1" element={<UniqueProduct1 />} />
    <Route path="/Products/SeperateProduct/UniqueProduct2" element={<UniqueProduct2 />} />
    <Route path="/Products/SeperateProduct/UniqueProduct3" element={<UniqueProduct3 />} />
    <Route path="/Products/SeperateProduct/UniqueProduct4" element={<UniqueProduct4 />} />
  </Route>
);

const router = createBrowserRouter(routeDefinition);

// const router = createBrowserRouter([
//   { path: "/", element: <StorePage /> },
//   { path: "/AboutPage/About", element: <About /> },
//   { path: "/Homepage/Home", element: <Home /> },
// ]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
