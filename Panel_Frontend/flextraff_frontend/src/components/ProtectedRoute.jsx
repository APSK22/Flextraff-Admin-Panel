// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem("auth");

  return isAuth ? children : <Navigate to="/" replace />;
}
