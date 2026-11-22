import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    category: 'DAILY CLEANSER',
    name: 'Gentle Face Cleanser',
    price: '€18.00',
    number: '01'
  },
  {
    id: 2,
    category: 'DAILY HYDRATION',
    name: 'Hydrating Face Cream',
    price: '€24.00',
    number: '02'
  },
  {
    id: 3,
    category: 'SKIN NOURISHMENT',
    name: 'Nourishing Face Serum',
    price: '€29.00',
    number: '03'
  }
]

function Collection() {
  return (
    <section className="collection page-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">BOTANÉ PRODUCTS</p>
          <h2>Our collection.</h2>
        </div>
        <p>Simple formulas. Thoughtful care.</p>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <Link
            to={`/product/${product.id}`}
            className="product-card"
            key={product.id}
          >
            <div className={`product-art product-${product.id}`}>
              {product.number}
            </div>
            <p>{product.category}</p>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Collection