import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AuthContextProvider } from "./contexts/AuthContext";
// import { ProtectedRoute } from "./components/ProtectedRoute";

import Layout from "./components/Layout";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <AuthContextProvider>
              <Layout />
              // </AuthContextProvider>
            }
          >
            <Route
              path="signup"
              element={
                // <ProtectedRoute>
                <Signup />
                // </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
