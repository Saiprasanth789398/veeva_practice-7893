import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .admin-container {
          min-height: 100vh;
          display: flex;
          background: #f5f7fb;
          font-family: Arial, sans-serif;
        }

        /* ================= SIDEBAR ================= */

        .admin-sidebar {
          width: 250px;
          min-height: 100vh;
          background: #111827;
          color: white;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
        }

        .admin-logo {
          padding: 25px;
          font-size: 24px;
          font-weight: 700;
          border-bottom: 1px solid #273244;
        }

        .admin-menu {
          padding: 25px 15px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .admin-menu-item {
          text-decoration: none;
          color: #9ca3af;
          padding: 13px 15px;
          border-radius: 8px;
          transition: 0.2s;
        }

        .admin-menu-item:hover {
          background: #1f2937;
          color: white;
        }

        .admin-menu-item.active {
          background: #2563eb;
          color: white;
        }

        .admin-sidebar-bottom {
          margin-top: auto;
          padding: 20px;
        }

        .admin-logout {
          width: 100%;
          padding: 12px;
          border: 1px solid #374151;
          background: transparent;
          color: #d1d5db;
          border-radius: 8px;
          cursor: pointer;
        }

        .admin-logout:hover {
          background: #1f2937;
        }

        /* ================= MAIN ================= */

        .admin-main {
          margin-left: 250px;
          width: calc(100% - 250px);
          padding: 35px;
        }

        /* ================= HEADER ================= */

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .admin-title {
          margin: 0;
          font-size: 30px;
          color: #111827;
        }

        .admin-subtitle {
          margin-top: 7px;
          color: #6b7280;
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .admin-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .admin-role {
          margin: 4px 0 0;
          color: #6b7280;
          font-size: 12px;
        }

        /* ================= STATISTICS ================= */

        .admin-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .admin-stat-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 22px;
        }

        .admin-stat-title {
          margin: 0;
          color: #6b7280;
          font-size: 14px;
        }

        .admin-stat-number {
          margin: 10px 0;
          font-size: 28px;
          color: #111827;
        }

        .admin-stat-text {
          color: #9ca3af;
          font-size: 12px;
        }

        /* ================= SECTIONS ================= */

        .admin-section {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 25px;
        }

        .admin-section-header {
          margin-bottom: 20px;
        }

        .admin-section-title {
          margin: 0;
          font-size: 20px;
        }

        .admin-section-text {
          margin-top: 6px;
          color: #6b7280;
          font-size: 14px;
        }

        /* ================= QUICK ACTIONS ================= */

        .admin-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .admin-action-card {
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 20px;
          transition: 0.2s;
        }

        .admin-action-card:hover {
          border-color: #2563eb;
          transform: translateY(-2px);
        }

        .admin-action-card h3 {
          margin: 0;
          font-size: 17px;
        }

        .admin-action-card p {
          color: #6b7280;
          font-size: 13px;
          margin: 8px 0 15px;
        }

        .admin-action-button {
          border: none;
          background: #2563eb;
          color: white;
          padding: 9px 15px;
          border-radius: 6px;
          cursor: pointer;
        }

        .admin-action-button:hover {
          background: #1d4ed8;
        }

        /* ================= RECENT ORDERS ================= */

        .admin-empty {
          text-align: center;
          padding: 45px;
          border: 1px dashed #d1d5db;
          border-radius: 10px;
        }

        .admin-empty h3 {
          margin-bottom: 8px;
        }

        .admin-empty p {
          color: #6b7280;
          font-size: 14px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1100px) {
          .admin-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .admin-actions {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .admin-sidebar {
            width: 70px;
          }

          .admin-logo {
            font-size: 0;
          }

          .admin-menu-item {
            font-size: 0;
            text-align: center;
          }

          .admin-main {
            margin-left: 70px;
            width: calc(100% - 70px);
            padding: 20px;
          }

          .admin-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="admin-container">

        {/* ================= SIDEBAR ================= */}

        <aside className="admin-sidebar">

          <div className="admin-logo">
            ShopWave
          </div>

          <nav className="admin-menu">

            <Link
              to="/admin"
              className="admin-menu-item active"
            >
              Dashboard
            </Link>

            <Link
              to="/admin/products"
              className="admin-menu-item"
            >
              Products
            </Link>

            <Link
              to="/admin/orders"
              className="admin-menu-item"
            >
              Orders
            </Link>

            <Link
              to="/admin/users"
              className="admin-menu-item"
            >
              Users
            </Link>

          </nav>

          <div className="admin-sidebar-bottom">

            <button
              className="admin-logout"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </aside>


        {/* ================= MAIN ================= */}

        <main className="admin-main">

          {/* HEADER */}

          <header className="admin-header">

            <div>

              <h1 className="admin-title">
                Dashboard
              </h1>

              <p className="admin-subtitle">
                Welcome back, Admin
              </p>

            </div>


            <div className="admin-profile">

              <div className="admin-avatar">
                A
              </div>

              <div>

                <strong>
                  Admin
                </strong>

                <p className="admin-role">
                  Administrator
                </p>

              </div>

            </div>

          </header>


          {/* STATISTICS */}

          <section className="admin-stats">

            <div className="admin-stat-card">

              <p className="admin-stat-title">
                Total Products
              </p>

              <h2 className="admin-stat-number">
                0
              </h2>

              <span className="admin-stat-text">
                Products in store
              </span>

            </div>


            <div className="admin-stat-card">

              <p className="admin-stat-title">
                Total Orders
              </p>

              <h2 className="admin-stat-number">
                0
              </h2>

              <span className="admin-stat-text">
                Orders received
              </span>

            </div>


            <div className="admin-stat-card">

              <p className="admin-stat-title">
                Total Users
              </p>

              <h2 className="admin-stat-number">
                0
              </h2>

              <span className="admin-stat-text">
                Registered users
              </span>

            </div>


            <div className="admin-stat-card">

              <p className="admin-stat-title">
                Total Revenue
              </p>

              <h2 className="admin-stat-number">
                ₹0
              </h2>

              <span className="admin-stat-text">
                Overall revenue
              </span>

            </div>

          </section>


          {/* QUICK ACTIONS */}

          <section className="admin-section">

            <div className="admin-section-header">

              <h2 className="admin-section-title">
                Quick Actions
              </h2>

              <p className="admin-section-text">
                Manage your store
              </p>

            </div>


            <div className="admin-actions">

              <div className="admin-action-card">

                <h3>
                  Products
                </h3>

                <p>
                  Add, edit and delete products
                </p>

                <button
                  className="admin-action-button"
                  onClick={() => navigate("/admin/products")}
                >
                  Manage Products
                </button>

              </div>


              <div className="admin-action-card">

                <h3>
                  Orders
                </h3>

                <p>
                  View and manage customer orders
                </p>

                <button
                  className="admin-action-button"
                  onClick={() => navigate("/admin/orders")}
                >
                  Manage Orders
                </button>

              </div>


              <div className="admin-action-card">

                <h3>
                  Users
                </h3>

                <p>
                  View registered users
                </p>

                <button
                  className="admin-action-button"
                  onClick={() => navigate("/admin/users")}
                >
                  Manage Users
                </button>

              </div>

            </div>

          </section>


          {/* RECENT ORDERS */}

          <section className="admin-section">

            <div className="admin-section-header">

              <h2 className="admin-section-title">
                Recent Orders
              </h2>

              <p className="admin-section-text">
                Latest customer orders
              </p>

            </div>


            <div className="admin-empty">

              <h3>
                No orders yet
              </h3>

              <p>
                Customer orders will appear here.
              </p>

            </div>

          </section>

        </main>

      </div>
    </>
  );
};

export default AdminDashboard;