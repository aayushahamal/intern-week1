import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Components from "./pages/Components";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter label="Daily Steps" />} />
        <Route path="/components" element={<Components />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}