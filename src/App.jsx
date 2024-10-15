import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Content from "./components/Dashboard/Content";
import GetStart from "./pages/GetStart";
import Test from "./pages/Test";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content /> }>
          <Route path="About" element={<HomePage />} />
          <Route path="GetStart" element={<GetStart /> } />
          <Route path="Test" element={<Test /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}