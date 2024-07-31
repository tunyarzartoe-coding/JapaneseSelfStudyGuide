import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import categories from '../../dummy/categories.json'; 

const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");

//   {"id": "17", "name": "N2 Grammar"},
//   {"id": "18", "name": "N1 "},
//   {"id": "19", "name": "N1 Kanji"},
//   {"id": "20", "name": "N1 Meaning"},
//   {"id": "21", "name": "N1 Grammar"}

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <>
      <div>
        {categories?.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "success" : "secondary"}
            size="sm"
            className="mx-1"
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default AllCategories;
