import { Link, useParams } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Gentle Face Cleanser',
    category: 'DAILY CLEANSER',
    price: '€18.00',
    description: 'A gentle everyday cleanser designed to leave your skincare routine feeling simple and refreshing.',
    ingredients: 'Aqua, Glycerin, Aloe Vera Extract'
  },
  {
    id: 2,
    name: 'Hydrating Face Cream',
    category: 'DAILY HYDRATION',
    price: '€24.00',
    description: 'An everyday moisturiser with a soft, lightweight feel.',
    ingredients: 'Aqua, Glycerin, Shea Butter'
  },
  {
    id: 3,
    name: 'Nourishing Face Serum',
    category: 'SKIN NOURISHMENT',
    price: '€29.00',
    description: 'A simple addition to your daily skincare routine.',
    ingredients: 'Aqua, Glycerin, Vitamin E'
  }
]

function ProductDetails() {
  const { id } = useParams()
  const product = products.find(item => item.id === Number(id))

  if (!product) {
    return (
      <section className="page-section">
        <h2>Product not found.</h2>
        <Link to="/collection">Return to collection</Link>
      </section>
    )
  }

  return (
    <section className="page-section details-layout">
      <div className={`product-art product-${product.id}`}>
        0{product.id}
      </div>

      <div className="details-content">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <h3>{product.price}</h3>

        <p>{product.description}</p>

        <div className="ingredients">
          <h3>Key ingredients</h3>
          <p>{product.ingredients}</p>
        </div>

        <Link to="/collection" className="shop-button">
          BACK TO COLLECTION ↗
        </Link>
      </div>
    </section>
  )
}

export default ProductDetails