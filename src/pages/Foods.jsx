import CommonSection from "../components/UI/common-section/CommonSection";
import products from "../assets/data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useState } from "react";

function Foods() {
  const [filteredInputFood, setFilteredInputFood] = useState(products);

  function handleChange(e) {
    const filteredProducts = products.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredInputFood(filteredProducts);
  }

  return (
    <div>
      <CommonSection title="All Foods" />

      <section>
        <input
          type="text"
          placeholder="Im looking for"
          onChange={(e) => handleChange(e)}
        />
      </section>

      <section>
        <select>
          <option value="">default</option>

          <option value="ascending">Alphabetically, A-Z</option>
          <option value="descending">Alphabetically, Z-A</option>
          <option value="high-price">High Price</option>
          <option value="low-price">Low Price</option>
        </select>
      </section>

      {filteredInputFood.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Foods;
