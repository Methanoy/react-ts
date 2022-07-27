import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import axios from "axios";
import { IProduct } from "../models";

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};
interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [titleError, setTitleError] = useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setTitleError("");

    if (value.trim().length === 0) {
      setTitleError("Please enter valid title");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };

  const handleChangeInputValue = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        value={value}
        onChange={handleChangeInputValue}
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
      />

      {titleError && <ErrorMessage error={titleError} />}

      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
};
