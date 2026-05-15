import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Components from "./pages/Components";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter label="Daily Steps" />} />
        <Route path="/counter" element={<Counter label="Daily Steps" />} />
        <Route path="/components" element={<Components />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}