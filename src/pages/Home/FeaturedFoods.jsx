import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const FeaturedFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("/availableFoods?foodStatus=Available")
      .then((data) => setFoods(data.data));
  }, [axiosSecure]);


  foods.sort((a, b) => b.quantityAvailable - a.quantityAvailable)

  return (
    <div className="text-center mt-14">
      <h1 className="text-4xl font-bold mb-7">Featured Foods</h1>
      <p className="px-5 md:mx-32">
        Discover Our Featured Favorites! Indulge in our curated selection of
        mouthwatering dishes, carefully chosen to tantalize your taste buds.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-start">
        {foods.slice(0, 6).map((data) => (
          <FeaturedCard key={data._id} food={data}></FeaturedCard>
        ))}
      </div>
      <div className="my-10">
        <Link to={"/availableFoods"}>
          <button className="relative px-5 py-2 font-medium group hidden md:inline">
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>

            <span className="flex items-center gap-2 relative">
              Show All
              <BsArrowRight className="text-xl"></BsArrowRight>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoods;
