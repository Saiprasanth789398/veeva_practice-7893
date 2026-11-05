import React, { useEffect, useState } from "react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setProducts(data.products);
    } catch (error) {
      console.error("Fetch products error:", error);
      alert("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={styles.container}>

      {/* Header */}

      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Products</h1>

          <p style={styles.subtitle}>
            Manage your store products
          </p>
        </div>

        <button style={styles.addButton} onClick = {() => window.location.href = '/admin/products/add'}>
          + Add Product
        </button>
      </div>


      {/* Products */}

      <div style={styles.productContainer}>

        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <div style={styles.empty}>
            <h2>No Products Found</h2>

            <p>
              Add your first product to your store.
            </p>
          </div>
        ) : (

          <div style={styles.tableContainer}>

            <table style={styles.table}>

              <thead>
                <tr>
                  <th style={styles.th}>Product</th>
                  <th style={styles.th}>Category</th>
                  <th style={styles.th}>Price</th>
                  <th style={styles.th}>Stock</th>
                  <th style={styles.th}>Rating</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>

              <tbody>

                {products.map((product) => (

                  <tr key={product._id}>

                    <td style={styles.td}>

                      <div style={styles.productInfo}>

                        <img
                          src={product.image}
                          alt={product.name}
                          style={styles.image}
                        />

                        <div>
                          <strong>
                            {product.name}
                          </strong>

                          <p style={styles.description}>
                            {product.description}
                          </p>
                        </div>

                      </div>

                    </td>

                    <td style={styles.td}>
                      {product.category}
                    </td>

                    <td style={styles.td}>
                      ₹{product.price}
                    </td>

                    <td style={styles.td}>
                      {product.stock}
                    </td>

                    <td style={styles.td}>
                      {product.rating}
                    </td>

                    <td style={styles.td}>

                      <button style={styles.editButton}>
                        Edit
                      </button>

                      <button style={styles.deleteButton}>
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
};


/* ================= STYLES ================= */

const styles = {

  container: {
    minHeight: "100vh",
    background: "#f5f6fa",
    padding: "35px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  title: {
    margin: 0,
    fontSize: "30px",
  },

  subtitle: {
    color: "#6b7280",
    marginTop: "7px",
  },

  addButton: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
  },

  productContainer: {
    background: "white",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    padding: "20px",
  },

  tableContainer: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "15px",
    borderBottom: "1px solid #e5e7eb",
    color: "#6b7280",
    fontSize: "13px",
  },

  td: {
    padding: "15px",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "14px",
  },

  productInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    minWidth: "250px",
  },

  image: {
    width: "55px",
    height: "55px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  description: {
    margin: "5px 0 0",
    color: "#9ca3af",
    fontSize: "12px",
  },

  editButton: {
    background: "#eff6ff",
    color: "#2563eb",
    border: "none",
    padding: "7px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "7px",
  },

  deleteButton: {
    background: "#fef2f2",
    color: "#dc2626",
    border: "none",
    padding: "7px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  empty: {
    textAlign: "center",
    padding: "70px 20px",
    color: "#6b7280",
  },
};

export default AdminProducts;