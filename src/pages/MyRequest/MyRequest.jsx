import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MyRequestRow from "./MyRequestRow";

const MyRequest = () => {
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
    );

}
export default MyRequest;