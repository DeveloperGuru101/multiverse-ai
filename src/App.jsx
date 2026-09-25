import { Navigate, Route, Routes } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import RouteAnalytics from "./components/RouteAnalytics";
import Home from "./pages/Home";
import ToolPage from "./pages/ToolPage";
import Guides from "./pages/Guides";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SystemeGuide from "./pages/SystemeGuide";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollManager />
      <RouteAnalytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/systeme" element={<SystemeGuide />} />
        <Route path="/highlevel" element={<ToolPage slug="highlevel" />} />
        <Route path="/adcreative" element={<ToolPage slug="adcreative" />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/systeme-tutorial" element={<Navigate to="/systeme" replace />} />
        <Route
          path="/all-in-one-business-platform"
          element={<Navigate to="/systeme" replace />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
