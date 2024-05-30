import { IoIosArrowDown } from "react-icons/io";
import AvailableFoodCard from "./AvailableFoodCard";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";

const AvailableFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [availableFoods, setAvailableFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [layout, setLayout]= useState(true);

  const { isPending, isError } = useQuery({
    queryKey: ['availableFoods'],
    queryFn: async () => {
      const response = await axiosSecure.get('/availableFoods?foodStatus=Available');
      setAvailableFoods(response.data)
      return response.data;
    },
  });

  if(isPending){
    return <div className="w-full h-[200px] flex items-center justify-center"><PuffLoader color="#32cd32"></PuffLoader></div>
  }

  if(isError){
    return <div className="w-full h-[200px] flex items-center justify-center"><p className="text-3xl">Failed To Fetch Data</p></div>
  }


  
  const handleShortBtn = (e) => {
    const selectedValue = e.target.value;
    let sortedFoods = [...availableFoods];
    if (selectedValue === "ascending") {
      sortedFoods.sort(
        (a, b) => new Date(a.expiryDateTime) - new Date(b.expiryDateTime)
      );
    } else if (selectedValue === "descending") {
      sortedFoods.sort(
        (a, b) => new Date(b.expiryDateTime) - new Date(a.expiryDateTime)
      );
    }
    setAvailableFoods(sortedFoods);
  };

  const handleSearch = (e) => {
    const searchedWord = e.target.value;
    setSearch(searchedWord);
  };

  const filteredFoods = availableFoods?.filter((food) =>
    food.foodName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

    <Helmet>
      <title>Yummy || AvailableFoods</title>
    </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/QcwgFJX/rr.jpg)",
        }}
        className="bg-contain bg-fixed bg-center rounded-3xl"
      >
        <div className="min-w-screen min-h-screen rounded-3xl bg-black bg-opacity-70 pt-14 pb-24">
          {availableFoods?.length < 1 ? (
            <div className="w-full h-[500px] flex items-center justify-center text-[#fcfcfc] font-semibold text-4xl text-center">
              <div>No food available.</div>
            </div>
          ) : (
            <div className="relative">
              <div onClick={ ()=> setLayout(!layout)} className="absolute py-1 px-3 text-white font-bold rounded-lg hover:bg-[#2e7c2e] md:right-10 right-5 -top-9 md:-top-4 bg-[#32CD32] hidden lg:inline-block"><button>change Layout</button></div>
              <h1 className="text-4xl font-bold mb-7 text-white text-center">
                Available Foods
              </h1>
              <p className="px-5 md:mx-32 text-white mb-7  text-center">
                Almost all people in the world have a dream to have a home with
                a beautiful environment and a tidy home is an indicator of a
                persons taste, so you can choose our homes to fulfill your
                dream.
              </p>

              {/* dropdown for Sort */}
              <div className="text-center md:flex justify-around">
                <div className="relative inline-flex self-center mb-5 md:mb-0">
                  <div className="text-white text-xl bg-[#32Cd32] absolute top-2 right-2 m-2 pointer-events-none p-1 rounded">
                    <IoIosArrowDown></IoIosArrowDown>
                  </div>
                  <select
                    onChange={handleShortBtn}
                    className="text-xl font-bold border-2 border-[#32Cd32] text-gray-600 h-14 w-[300px] pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none rounded-full"
                  >
                    <option>Sort By:</option>
                    <option value="ascending">Earliest Expiry Date</option>
                    <option value="descending">Latest Expiry Date</option>
                  </select>
                </div>

                {/* search option */}
                <div className="relative inline-flex self-center ">
                  <div
                    className={` ${
                      search?.length > 0 ? "hidden" : ""
                    } text-white text-xl bg-[#32Cd32] absolute top-2 right-3 m-2 pointer-events-none p-1 rounded`}
                  >
                    <FaSearch></FaSearch>
                  </div>
                  <input
                    onChange={handleSearch}
                    className="text-xl font-bold border-2 border-[#32Cd32] text-gray-600 h-14 w-[300px] pl-5 pr-5 bg-white hover:border-gray-400 focus:outline-none appearance-none rounded-full"
                    type="search"
                    placeholder="Search"
                    name=""
                    id=""
                  />
                </div>
              </div>

              <div className={layout ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-[95%] mx-auto" : "grid md:grid-cols-2 gap-6 mt-12 w-[85%] mx-auto"}>
                {filteredFoods?.length < 1 ? (
                  <div className="text-white text-2xl flex items-center justify-center col-span-3 mt-8">
                    <p>No available foods match your search criteria.</p>
                  </div>
                ) : (
                  filteredFoods?.map((data) => (
                    <AvailableFoodCard
                      key={data._id}
                      food={data}
                    ></AvailableFoodCard>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AvailableFoods;
