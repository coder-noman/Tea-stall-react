import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="flex flex-col items-center border-4 border-rose-700">
      <h1 className="text-5xl font-bold">{title}</h1>

      <img className="h-[300px]" src={image_url} alt="product image" />

      <h3 className="text-2xl font-semibold">{price} $$</h3>
      <h3 className="text-xl font-semibold">{brand}</h3>
      <p className="text-lg font-light">{description}</p>
    </div>
  );
};

export default ProductDetails;