const AddProducts = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div>
      <div className="my-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <input
                className="bg-red-100 w-1/2 p-3 border border-black rounded-lg"
                type="text"
                name="id"
                placeholder="ID"
              />
            </div>
            <div>
              <input
                className="bg-red-100 w-1/2 p-3 border border-black rounded-lg"
                type="text"
                name="title"
                placeholder="Title"
              />
            </div>
            <div>
              <input
                className="bg-red-100 w-1/2 p-3 border border-black rounded-lg"
                type="text"
                name="brand"
                placeholder="Brand"
              />
            </div>
            <div>
              <input
                className="bg-red-100 w-1/2 p-3 border border-black rounded-lg"
                type="text"
                name="price"
                placeholder="Price"
              />
            </div>
            <div>
              <input
                className="bg-red-100 w-1/2 p-3 border border-black rounded-lg"
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
            <div>
              <input
                className="bg-red-100  w-1/2 p-3 border border-black rounded-lg"
                type="text"
                name="image_url"
                placeholder="Image Url"
              />
            </div>
            <div>
              <input
                className="bg-red-500 text-white w-32 p-3 border border-black rounded-lg"
                type="submit"
                value="add-product"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
