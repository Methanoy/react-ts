import Product from "./components/Product";
import { IProduct } from "./models";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function fetchProducts() {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products?limit=5"
    );
    setProducts(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5 ">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default App;
