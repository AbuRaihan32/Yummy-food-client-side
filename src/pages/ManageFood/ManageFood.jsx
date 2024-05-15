import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageFoodRow from "./ManageFoodRow";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";

const ManageFood = () => {
  const { user } = useAuth();
  const [myFood, setMyFood] = useState([]);
  const [toggle, setToggle] = useState(true);
  const axiosSecure = useAxiosSecure();


  const { isPending, isError } = useQuery({
    queryKey: ["manageFoods"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/featuredFoods?email=${user.email}`);
      setMyFood(response.data);
      return response.data;
    },
  });

  if (isPending) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center">
        <PuffLoader color="#32cd32"></PuffLoader>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center">
        <p className="text-3xl">Failed To Fetch Data</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Yummy || Manage Foods</title>
      </Helmet>

      {myFood?.length < 1 ? (
        <div className="w-full h-[300px] flex items-center justify-center font-semibold text-4xl">
          <div>You have not Added any food</div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Food Name</th>
                <th>Pickup Location</th>
                <th>Expiry Date </th>
                <th>Additional Notes</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myFood.map((food, index) => (
                <ManageFoodRow
                  key={food._id}
                  food={food}
                  index={index}
                  toggle={toggle}
                  setToggle={setToggle}
                ></ManageFoodRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ManageFood;
