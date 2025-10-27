import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
