import GoogleLoginPage from "./GoogleLoginPage";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<GoogleLoginPage/>} />
    </Routes>
    </div>
  );
}

export default App;
