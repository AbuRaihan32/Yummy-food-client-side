import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageFoodRow from "./ManageFoodRow";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

const ManageFood = () => {
  const { user } = useAuth();
  const [myFood, setMyFood] = useState([]);
  const [toggle, setToggle] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/featuredFoods?email=${user.email}`)
      .then((res) => setMyFood(res.data));
  }, [axiosSecure, user, toggle]);

  return (
    <>
    <Helmet>
      <title>Yummy || Manage Foods</title>
    </Helmet>
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
    </>
  );
};

export default ManageFood;
