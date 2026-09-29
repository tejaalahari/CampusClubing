function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="category-container">

      {categories.map((category) => (
        <button
          key={category}
          className={
            activeCategory === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;