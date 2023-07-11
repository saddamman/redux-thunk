import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://react-http-78323-default-rtdb.firebaseio.com/meals.json");
    if (!response.ok) {
      throw new Error("Data is not fetching!!");
    }
    const data = await response.json();
    let allData = [];
    for (const key in data) {
      allData.push({
        id: key,
        name: data[key].name,
        price: data[key].price,
        description: data[key].description,
      });
    }
    setProducts(allData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((element) => (
          <ProductItem key={element.id} id={element.id} title={element.name} price={element.price} description={element.description} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
