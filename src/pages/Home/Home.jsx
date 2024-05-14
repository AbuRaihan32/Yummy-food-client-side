import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Yummy || Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
    </div>
  );
};

export default Home;
