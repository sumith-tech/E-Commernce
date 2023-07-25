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

const routeDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<StorePage />} />
    <Route path="/AboutPage/About" element={<About />} />
    <Route path="/Homepage/Home" element={<Home />} />
    <Route path="/ContactUs/Contactus" element={<Contactus />} />
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
