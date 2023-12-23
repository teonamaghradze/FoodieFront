import CommonSection from "../components/UI/common-section/CommonSection";
import products from "../assets/data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useState } from "react";
import "./Foods.scss";

function Foods() {
  const [filteredInputFood, setFilteredInputFood] = useState(products);
  const [filterSelectFood, setFilterSelectFood] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInputFood.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredInputFood.length / itemsPerPage);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  function handleChange(e) {
    const filteredProducts = products.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredInputFood(filteredProducts);
  }

  function handleSelect(e) {
    setFilterSelectFood(e.target.value);
    if (e.target.value === "high-price") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setFilteredInputFood(sorted);
    }

    if (e.target.value === "low-price") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setFilteredInputFood(sorted);
    }

    if (e.target.value === "default") setFilterSelectFood("");
    // if (e.target.value === "default") setFilterSelectFood(products);
  }

  return (
    <div>
      <CommonSection title="All Foods" />

      <div className="filters">
        <section>
          <input
            type="text"
            placeholder="Im looking for"
            onChange={(e) => handleChange(e)}
          />
        </section>

        <section>
          <select onChange={(e) => handleSelect(e)}>
            <option value="">default</option>
            <option value="high-price">High Price</option>
            <option value="low-price">Low Price</option>
          </select>
        </section>
      </div>
      <div className="products-box">
        {currentItems.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Foods;
