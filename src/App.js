import "./App.css";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout/UserLayout";


function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}

export default App;
