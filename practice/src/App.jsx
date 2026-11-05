import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

// ================= PAGES =================

import Landingpage from "./pages/landingpage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Mobilepage from "./pages/Mobilepage";
import Computerpage from "./pages/Computerpage";
import Furniturepage from "./pages/Furniturepage";
import Kitchenpage from "./pages/Kitchenpage";
import Menswearpage from "./pages/Menswearpage";
import Watchespage from "./pages/watchespage";
import Womanwearpage from "./pages/Womanwearpage";


// -------------------------------- ADMIN PAGES -------------------------------
import AdminProducts from "./admin/AdminProducts";
import AdminDashboard from "./admin/AdminDashboard";
// ================= SINGLE PAGES =================

import Mobilesingle from "./singles/Mobilesingle";
import Usecart from "./singles/Usecart";

// ================= COMPONENTS =================

import Navbar from "./components/navbar";

// ================= CSS =================

import "./App.css";


// =====================================================
// PROTECTED ROUTE
// =====================================================

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // No token → send user to Login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token exists → allow page
  return children;
}


// =====================================================
// LAYOUT
// =====================================================

function Layout() {

  const location = useLocation();

  const [search, setSearch] = useState("");

  // Hide Navbar on Login and Register pages
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";


  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      {!hideNavbar && (
        <Navbar
          search={search}
          setSearch={setSearch}
        />
      )}


      {/* =================================================
          ROUTES
      ================================================= */}

      <Routes>

        {/* =================================================
            AUTHENTICATION
        ================================================= */}

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
{ /*=================================================
            ADMIN
        ================================================= */}

        <Route
          path="/admin/products"
          element={<ProtectedRoute><AdminProducts /></ProtectedRoute>}
        />

        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

        {/* =================================================
            HOME
        ================================================= */}


        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Landingpage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            MOBILE
        ================================================= */}

        <Route
          path="/Mobilepage"
          element={
            <ProtectedRoute>
              <Mobilepage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            COMPUTER
        ================================================= */}

        <Route
          path="/Computerpage"
          element={
            <ProtectedRoute>
              <Computerpage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            WATCHES
        ================================================= */}

        <Route
          path="/Watchespage"
          element={
            <ProtectedRoute>
              <Watchespage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            MEN'S WEAR
        ================================================= */}

        <Route
          path="/Menswearpage"
          element={
            <ProtectedRoute>
              <Menswearpage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            WOMEN'S WEAR
        ================================================= */}

        <Route
          path="/Womanwearpage"
          element={
            <ProtectedRoute>
              <Womanwearpage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            FURNITURE
        ================================================= */}

        <Route
          path="/Furniturepage"
          element={
            <ProtectedRoute>
              <Furniturepage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            KITCHEN
        ================================================= */}

        <Route
          path="/Kitchenpage"
          element={
            <ProtectedRoute>
              <Kitchenpage
                search={search}
              />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            SINGLE MOBILE PRODUCT
        ================================================= */}

        <Route
          path="/Mobilepage/:id"
          element={
            <ProtectedRoute>
              <Mobilesingle />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            CART
        ================================================= */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Usecart />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            404 PAGE
        ================================================= */}

        <Route
          path="*"
          element={
            <div>
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          }
        />

      </Routes>
    </>
  );
}


// =====================================================
// APP
// =====================================================

function App() {

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}


export default App;