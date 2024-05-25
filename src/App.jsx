import RootLayOut from "./components/roots/RootLayOut";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Fashion from "./pages/fashion/Fashion";
import Contact from "./pages/contact/Contact";
import Fashiondetails from "./pages/fashion/Fashiondetails";
import Reupholstery from "./pages/reupholstery/Reupholstery";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/fashion" element={<Fashion/>}></Route>
        <Route path="/reupholstery" element={<Reupholstery/>}></Route>
        <Route path="/fashiondetails/:id" element={<Fashiondetails/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        Reupholstery
      </Route>
    )
  );
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
