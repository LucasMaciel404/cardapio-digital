import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLogin from "../pages/Admin/Login";
import AdminDashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Products from "../pages/Admin/Products";
import Categories from "../pages/Admin/Categories";
import Menu from "../pages/Menu";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path="/"
          element={<Menu />}
        />

        <Route path="/admin" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}