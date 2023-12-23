import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Section from "./components/section/Section";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Section id="home" content={<Home />} />
      </>
    ),
  },
  {
    path: "/skills",
    element: (
      <>
        <Header />
        <Section id="skills" content={<Skills />} />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <Header />
        <Section id="projects" content={<Projects />} />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Section id="contact" content={<Contact />} />
      </>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
