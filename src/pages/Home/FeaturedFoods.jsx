import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import FeaturedCard from "./FeaturedCard";

const FeaturedFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  console.log(foods)

  useEffect(() => {
    axiosSecure
      .get("/featuredFoods?email=admin@gmail.com")
      .then((data) => setFoods(data.data));
  }, [axiosSecure]);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-7">Featured Foods</h1>
      <p className="px-5 md:mx-32">
        Discover Our Featured Favorites! Indulge in our curated selection of
        mouthwatering dishes, carefully chosen to tantalize your taste buds.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-start">
        {foods.map((data) => (
          <FeaturedCard key={data._id} food={data}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
