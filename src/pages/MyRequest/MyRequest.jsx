import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MyRequestRow from "./MyRequestRow";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MyRequest = () => {
  const [myFood, setMyFood] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  console.log(myFood);

  useEffect(() => {
    axiosSecure
      .get(`/requestedFoods?foodStatus=Requested&userEmail=${user.email}`)
      .then((res) => setMyFood(res.data));
  }, [axiosSecure, user]);

  return (
    <>
    <Helmet>
      <title>Yummy || My Request</title>
    </Helmet>
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
    </>
  );
};
export default MyRequest;
