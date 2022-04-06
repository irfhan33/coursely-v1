import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
