import React, { useState } from "react";
import { Button } from "react-bootstrap";
import categories from '../../dummy/categories.json'; 

const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <>
      <div className="categories-container container">
        {categories.map((category) => (
          <Button
            key={category.id}
            size="sm"
            className="category-btn"
            onClick={() => handleCategoryClick(category.id)}
            style={{
              background: selectedCategory === category.id ? "#2d2d2d" : "#E0E0E0",
              borderColor: "#eee",
              color: selectedCategory === category.id ? "#fff" : "#2d2d2d",
            }}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default AllCategories;
