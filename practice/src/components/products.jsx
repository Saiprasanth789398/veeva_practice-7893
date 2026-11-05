import React from 'react'
import { allProducts } from '../allProducts'

const categoryLabels = {
  ac: 'Air Conditioners',
  books: 'Books',
  computers: 'Computers',
  fridge: 'Refrigerators',
  furniture: 'Furniture',
  kitchen: 'Kitchen Appliances',
  men: 'Men Wear',
  mobiles: 'Mobile Phones',
  speaker: 'Speakers',
  tv: 'TVs',
  watch: 'Watches',
  woman: 'Woman Wear',
}

const Products = ({ search }) => {

  // Filter products based on search
  const filteredProducts = allProducts.filter((product) => {
    if (!search) return true

    const searchText = search.toLowerCase()

    return (
      product.title?.toLowerCase().includes(searchText) ||
      product.product?.toLowerCase().includes(searchText) ||
      product.description?.toLowerCase().includes(searchText) ||
      product.sourceCategory?.toLowerCase().includes(searchText)
    )
  })

  // Group filtered products by category
  const grouped = filteredProducts.reduce((acc, product) => {
    const key = product.sourceCategory

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(product)

    return acc
  }, {})

  return (
    <>
      {Object.entries(grouped).map(([category, products]) => (
        <section key={category} style={{ marginBottom: '2rem' }}>

          <h2>
            {categoryLabels[category] || category} ({products.length})
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >

            {products.map((product) => (
              <div key={product.id}>

                <img
                  src={product.image}
                  alt={product.title || product.product}
                  style={{
                    width: '100%',
                    height: 'auto'
                  }}
                />

                <h3>
                  {product.title || product.product}
                </h3>

                <p>
                  {product.description}
                </p>

                <p>
                  ${product.price}
                </p>

              </div>
            ))}

          </div>
        </section>
      ))}
    </>
  )
}

export default Products