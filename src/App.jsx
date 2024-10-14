import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Content from "./components/Dashboard/Content";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content /> }>
          <Route path="Home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}