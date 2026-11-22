import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Cleansers',
    description: 'A fresh start to your daily skincare routine.',
    id: 1
  },
  {
    name: 'Moisturisers',
    description: 'Everyday hydration and simple care.',
    id: 2
  },
  {
    name: 'Serums',
    description: 'Thoughtful additions to your skincare routine.',
    id: 3
  }
]

function Categories() {
  return (
    <section className="page-section">
      <p className="eyebrow">EXPLORE BY TYPE</p>
      <h2 className="page-title">Our categories.</h2>

      <div className="category-grid">
        {categories.map(category => (
          <Link
            to={`/product/${category.id}`}
            className="category-card"
            key={category.id}
          >
            <span>0{category.id}</span>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <span className="category-arrow">EXPLORE ↗</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories