import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import MeetOurTeam from "./MeetOurTeam";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Yummy || Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <MeetOurTeam></MeetOurTeam>
      <Review></Review>
    </div>
  );
};

export default Home;
