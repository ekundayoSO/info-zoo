import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const categoryItems = rest[category] || [];

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = categoryItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="category-page">
      <h2>{category}</h2>
      <input
        type="text"
        placeholder="Enter name to search"
        value={search}
        onChange={searchHandler}
        className="search-bar"
      />
      <div className="card-container">
        {filteredItems.map((item) => (
          <Card
            key={item.name}
            name={item.name}
            likes={item.likes}
            removeCard={() => removeCard(item.name, category)}
            removeLikes={() => removeLikes(item.name, category, "remove")}
            addLikes={() => addLikes(item.name, category, "add")}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
