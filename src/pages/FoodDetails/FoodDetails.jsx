import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const FoodDetails = () => {
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const axiosSecure = useAxiosSecure();

  const {
    _id,
    foodName,
    foodImage,
    quantityAvailable,
    pickupLocation,
    expiryDateTime,
    additionalNotes,
    donatorImage,
    donatorName,
    donatorEmail,
    foodStatus,
  } = food;

  useEffect(() => {
    axiosSecure.get(`/singleFood/${id}`).then((data) => setFood(data.data));
  }, [axiosSecure, id]);

  return (
    <div className="text-center">
      <img className="w-64 mx-auto" src={foodImage} alt="" />
      <h1>{foodName}</h1>
      <h1>{quantityAvailable}</h1>
      <h1>{pickupLocation}</h1>
      <h1>{expiryDateTime}</h1>
      <h1>{additionalNotes}</h1>
      <h1>{donatorName}</h1>
      <h1>{donatorEmail}</h1>
      <img className="w-64 mx-auto" src={donatorImage} alt="" />
      <h1>{foodStatus}</h1>
      <h1>{_id}</h1>
    </div>
  );
};

export default FoodDetails;
