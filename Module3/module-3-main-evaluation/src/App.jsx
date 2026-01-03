import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import ProtectedRoute from "./routes/ProtectedRoute";

import './App.css'

function App() {
 <Routes>
  <Route path="/" element={<Login />} />

  <Route 
  path="/admin/dashboard"
  element={
    <ProtectedRoute role="admin">
      <UpdateRestaurant />
    </ProtectedRoute>
  }
  /> 
 </Routes>
 
}

