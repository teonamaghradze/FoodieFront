import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "./Category.scss";

const categoryData = [
  { display: "Fastfood", imgUrl: categoryImg01 },
  { display: "Pizza", imgUrl: categoryImg02 },
  { display: "Asian Food", imgUrl: categoryImg03 },
  { display: "Row meat", imgUrl: categoryImg04 },
];

function Category() {
  return (
    <div className="category">
      {categoryData.map((item, i) => (
        <div key={item.display}>
          <img src={item.imgUrl} alt="" />
          <h6>{item.display}</h6>
        </div>
      ))}
    </div>
  );
}

export default Category;
