import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProductCardDashboard = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;
  const handleDelete =async()=>{
    await fetch(`http://localhost:3000/shoes/${id}`,
    {method: "DELETE"})
    .then(res=>res.json())
    .then(data =>console.log(data))
  }


  return (
    <div className="card w-72 h-[500px] bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-green-500 text-white">
            <Link to={`/products/${id}`}>Update</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">Delete
          </button>
          <button className="btn bg-blue-500 text-white">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;