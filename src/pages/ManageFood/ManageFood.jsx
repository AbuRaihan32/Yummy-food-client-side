import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageFoodRow from "./ManageFoodRow";

const ManageFood = () => {
  const [myFood, setMyFood] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/featuredFoods?email=admin@gmail.com")
      .then((res) => setMyFood(res.data));
  }, [axiosSecure]);


  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Food Name</th>
            <th>Pickup Location</th>
            <th>Expiry Date </th>
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
            ></ManageFoodRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFood;
