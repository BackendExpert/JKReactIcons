import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Content from "./components/Dashboard/Content";
import GetStart from "./pages/GetStart";
import Test from "./pages/Test";
import DocsIndex from "./pages/Docs/DocsIndex";
import DocsOne from "./pages/Docs/DocsOne";
import Release from "./pages/Release/Release";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content /> }>
          <Route path="About" element={<HomePage />} />
          <Route path="GetStart" element={<GetStart /> } />
          <Route path="Docs" element={<DocsIndex /> } />
          <Route path="DocsOne/:id" element={<DocsOne /> } />
          <Route path="Release" element={<Release /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}