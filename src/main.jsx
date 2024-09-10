import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Design from "./components/Design/Design.jsx";
import Login from "./components/Login/Login.jsx";
import User from "./components/User/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<User />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<Projects />} />
      <Route path="design" element={<Design />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
