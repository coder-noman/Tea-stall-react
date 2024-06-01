import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/banner";
import Products from "../components/home/Products";

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner/>
            <Products data={data}/>
        </div>
    );
};

export default Home;