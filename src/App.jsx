import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Project } from "./pages/Project/Project";


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

