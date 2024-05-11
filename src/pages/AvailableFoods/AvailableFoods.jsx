import { IoIosArrowDown } from "react-icons/io";
import AvailableFoodCard from "./AvailableFoodCard";
import { useEffect, useState } from "react";
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { FaSearch } from "react-icons/fa";

const AvailableFoods = () => {
    const axiosSecure = useAxiosSecure();
    const [availableFoods, setAvailableFoods] = useState([]);

    useEffect(()=>{
        axiosSecure.get('/availableFoods?foodStatus=Available')
        .then(res => setAvailableFoods(res.data))
    }, [axiosSecure])



    const handleShortBtn = (e) =>{
        const selectedValue = e.target.value;
        let sortedFoods = [...availableFoods];
        if(selectedValue === 'ascending'){
            sortedFoods.sort((a, b) => a.quantityAvailable - b.quantityAvailable);  
        }else if(selectedValue === 'descending'){
            sortedFoods.sort((a,b)=> b.quantityAvailable - a.quantityAvailable);
        }
        setAvailableFoods(sortedFoods)
    }



  return (
    <div
      style={{
        backgroundImage:
          "url(https://i.ibb.co/c3R6bpD/pexels-hebaysal-2776479.jpg)",
      }}
      className="bg-cover bg-center rounded-b-3xl"
    >
      <div className="min-w-screen min-h-screen rounded-b-3xl bg-gray-900 bg-opacity-80 pt-32 pb-24">
        {availableFoods?.length < 1 ? (
          <div className="w-full h-[500px] flex items-center justify-center text-[#fcfcfc] font-semibold text-4xl">
            <div>You have not added any spots yet.</div>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold mb-7 text-white text-center">
              All Tourists Spots
            </h1>
            <p className="px-5 md:mx-32 text-white mb-7  text-center">
              Almost all people in the world have a dream to have a home with a
              beautiful environment and a tidy home is an indicator of a persons
              taste, so you can choose our homes to fulfill your dream.
            </p>

            {/* dropdown for Sort */}
            <div className="text-center md:flex justify-around">
              <div className="relative inline-flex self-center">
                <div className="text-white text-xl bg-[#32Cd32] absolute top-2 right-2 m-2 pointer-events-none p-1 rounded">
                  <IoIosArrowDown></IoIosArrowDown>
                </div>
                <select
                  onChange={handleShortBtn}
                  className="text-xl font-bold border-2 border-[#32Cd32] text-gray-600 h-14 w-[300px] pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none rounded-full"
                >
                  <option>Sort By:</option>
                  <option value="ascending">Quantity Low to High</option>
                  <option value="descending">Quantity High to Low</option>
                </select>
              </div>

              {/* search option */}
              <div className="relative inline-flex self-center ">
                <div className="text-white text-xl bg-[#32Cd32] absolute top-2 right-3 m-2 pointer-events-none p-1 rounded">
                  <FaSearch></FaSearch>
                </div>
                <input className="text-xl font-bold border-2 border-[#32Cd32] text-gray-600 h-14 w-[300px] pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none rounded-full" type="search" placeholder="Search" name="" id="" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-[95%] mx-auto">
              {availableFoods.map((data) => (
                <AvailableFoodCard key={data._id} food={data}></AvailableFoodCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
