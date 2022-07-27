import Product from "./components/Product";
import { useProducts } from "./hooks/products";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { Modal } from "./components/Modal";
import { CreateProduct } from "./components/CreateProduct";
import { useState } from "react";
import { IProduct } from "./models";

const App = () => {
  const { products, error, loading, addProduct } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCreateProduct = (product: IProduct) => {
    setIsModalOpen(false);
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5 ">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {isModalOpen && (
        <Modal title="Create new product" onClose={() => setIsModalOpen(false)}>
          <CreateProduct onCreate={handleCreateProduct} />
        </Modal>
      )}
      <button onClick={() => setIsModalOpen(true)} className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2">
        +
      </button>
    </div>
  );
};

export default App;
