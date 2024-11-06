import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductCards = () => {
  const data = useLoaderData(); // Products All data here
  const { category } = useParams(); // Category data here

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filterByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filterByCategory);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-11">
      {/* All products card --- {category} */}
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductCards;
