import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import CollegeRegister from "../pages/CollegeRegister";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/college/register" element={<CollegeRegister />} />
        </Routes>
    </BrowserRouter>
  );
}
