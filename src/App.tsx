import './App.css'
import { CodingPage } from './pages/CodingPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
