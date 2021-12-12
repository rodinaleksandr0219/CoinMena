import { Routes, Route } from "react-router-dom";
import Repositories from "./pages/repositories";
import Developers from "./pages/developers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Repositories />} />
      <Route path="/developers" element={<Developers />} />
    </Routes>
  );
}

export default App;
