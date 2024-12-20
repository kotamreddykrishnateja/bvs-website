import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./Pages/HomePage.jsx";
import Services from "./Pages/Services.jsx";
import Courses from "./Pages/Courses.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";
import Project from "./components/ourprojects/Projects.jsx";
import DigitalMarketing from "./Pages/DigitalMarketing.jsx";
import SocialMediaHandling from "./Pages/SocialMediaHandling.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* all routes goes inside */}
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/project" element={<Project />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing/>}/>
      <Route path="/services/social-media-handling" element={<SocialMediaHandling/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
