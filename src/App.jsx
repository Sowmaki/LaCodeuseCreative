import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';


export default function App() {

  return (
    <BrowserRouter basename="/LaCodeuseCreative">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<Project />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

