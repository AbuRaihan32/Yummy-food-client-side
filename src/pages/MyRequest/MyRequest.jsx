import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MyRequestRow from "./MyRequestRow";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";

const MyRequest = () => {
  const [myFood, setMyFood] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { isPending, isError } = useQuery({
    queryKey: ["myRequest"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/requestedFoods?foodStatus=Requested&userEmail=${user.email}`
      );
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
        <p className="text-3xl text-center">Failed To Fetch Data</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Yummy || My Request</title>
      </Helmet>
      {myFood?.length < 1 ? (
        <div className="w-full h-[300px] flex items-center justify-center font-semibold text-4xl">
          <div className="text-center">You have not requested any food</div>
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
              <th>Request Date </th>
              <th>Expiry Date </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myFood.map((food, index) => (
              <MyRequestRow
                key={food._id}
                food={food}
                index={index}
              ></MyRequestRow>
            ))}
          </tbody>
        </table>
      </div>
      )}

 
    </>
  );
};
export default MyRequest;
