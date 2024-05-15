import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ManageFoodRow from "./ManageFoodRow";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { PuffLoader } from "react-spinners";

const ManageFood = () => {
  const { user } = useAuth();
  const [myFood, setMyFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toggle, setToggle] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/featuredFoods?email=${user.email}`)
      .then((res) => {
        setMyFood(res.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message || "An error occurred while fetching data.");
      });
  }, [axiosSecure, user, toggle]);

  if (loading) {
    return <div className="w-full h-[200px] flex items-center justify-center"><PuffLoader color="#32cd32"></PuffLoader></div>
  }

  if (error) {
    return <div className="w-full h-[200px] flex items-center justify-center text-2xl text-center">Something went wrong!</div>
  }

  return (
    <>
      <Helmet>
        <title>Yummy || Manage Foods</title>
      </Helmet>

      {myFood?.length < 1 ? (
        <div className="w-full h-[300px] flex items-center justify-center font-semibold text-4xl">
          <div className="text-center">You have not added any food</div>
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
                <th>Expiry Date</th>
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
