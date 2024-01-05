import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { AuthContextProvider } from "./contexts/AuthContext";
// import { ProtectedRoute } from "./components/ProtectedRoute";

import Layout from "./components/Layout";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
