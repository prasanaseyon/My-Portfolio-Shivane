/* ==================================================================
   app.jsx — the route table. Layout wraps every page, so the navbar
   and footer mount once and survive navigation.
   ================================================================== */

import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import {
  About,
  Awards,
  Contact,
  Home,
  NotFound,
  Projects,
  ResearchDetail,
  ResearchIndex,
  Volunteering,
  Work,
  WorkDetail,
} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="research" element={<ResearchIndex />} />
        <Route path="research/:slug" element={<ResearchDetail />} />

        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<WorkDetail />} />

        <Route path="projects" element={<Projects />} />
        <Route path="awards" element={<Awards />} />
        <Route path="volunteering" element={<Volunteering />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
