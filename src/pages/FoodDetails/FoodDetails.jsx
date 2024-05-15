import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState, useRef } from "react";
import { IoLocation } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { FaCircleChevronRight } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";

const FoodDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [food, setFood] = useState([]);
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit } = useForm();

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

  const { isPending, isError } = useQuery({
    queryKey: ["foodDetails"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/singleFood/${id}`);
      setFood(response.data);
      setLoading(false);
      return response.data;
    },
  });

  if (loading) {
    return (
      <div className="w-full h-[200px] flex items-center justify-center">
        <PuffLoader color="#32cd32"></PuffLoader>
      </div>
    );
  }

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

  // ! handle request button
  const handleRequest = () => {
    if (user?.email === donatorEmail) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cannot request the food you added!",
      });
    } else {
      modalRef.current.showModal();
    }
  };

  // ! handle Request Confirm Button
  const onSubmit = (data) => {
    const { requestDate, userEmail } = data;
    const updatedFood = { requestDate, userEmail };

    // update
    axiosSecure
      .put(`requestFood/${_id}`, updatedFood)
      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            title: "Requested",
            text: "Your food has been Requested.",
            icon: "success",
          });
          modalRef.current.close();
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>Yummy || Details Page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row md:p-16 gap-10 md:pl-24">
          <img
            src={foodImage}
            className="md:w-[40%] h-[400px] rounded-lg shadow-2xl object-cover"
          />
          <div className="md:w-[60%] pl-5 border-l-2 ">
            {/* donator Name:  */}
            <div className="flex items-center gap-20">
              <div className="flex gap-2 items-center text-[18px] font-semibold">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={donatorImage} />
                  </div>
                </div>
                <div>
                  <p className="text-[14px] font-medium">Donator :</p>
                  <h2 className=" text-[18px] font-semibold">{foodName}</h2>
                </div>
              </div>
              <h2 className="text-[18px] font-semibold mt-4 text-[#49e249] px-3 py-1 border border-[#32CD32] rounded-full ">
                {foodStatus}
              </h2>
            </div>

            {/* pickup Location */}
            <div className=" mt-4">
              <p className="flex items-center gap-2 text-[18px] font-semibold pb-3">
                {" "}
                <IoLocation className="text-[#32CD32]"></IoLocation> Pickup
                Location : <span className="text-[16px]">{pickupLocation}</span>
              </p>
            </div>
            <hr className="w-[70%]" />

            <h1 className="text-3xl font-bold my-2">{foodName}</h1>

            <ul className="ml-8 list-disc pb-5">
              <li className="flex items-center gap-2">
                {" "}
                <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight>
                <span>Food Quantity :</span> {quantityAvailable}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight>
                <span>Expire in : </span> {expiryDateTime}
              </li>
              <li className="list-none">
                {" "}
                <span className="flex items-center gap-2">
                  <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight>
                  Additional Note :{" "}
                </span>{" "}
                <div className="ml-6">{additionalNotes}</div>
              </li>
            </ul>
            <hr className="w-[70%]" />

            <div className="mt-5">
              <button
                className="text-xl text-white relative px-5 py-2 font-semibold group mr-20"
                onClick={handleRequest}
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                <span className="flex items-center justify-center gap-2 relative">
                  <span> Request Food </span>{" "}
                </span>
              </button>

              <Link to={location.state}>
                <button className="text-xl text-white relative px-5 py-2 font-semibold group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                  <span className="flex items-center justify-center gap-2 relative">
                    <span> Go Back </span>{" "}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal" ref={modalRef}>
        <div className="modal-box w-11/12 max-w-[60%]">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            {/* row 1 */}
            <div className="md:flex gap-4">
              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">Food Name</label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={foodName}
                    {...register("foodName")}
                  />
                </div>
              </div>

              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">Photo URL</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={foodImage}
                    {...register("foodImage")}
                  />
                </div>
              </div>
            </div>

            {/* row 2 */}
            <div className="md:flex gap-4">
              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">Food ID</label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={_id}
                    {...register("foodID")}
                  />
                </div>
              </div>

              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">
                  Pickup Location
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={pickupLocation}
                    {...register("pickupLocation")}
                  />
                </div>
              </div>
            </div>

            {/* row 3 */}
            <div className="md:flex gap-4">
              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">
                  Expired Date/Time
                </label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={expiryDateTime}
                    {...register("expiryDateTime")}
                  />
                </div>
              </div>
              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">
                  Additional Notes
                </label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={additionalNotes}
                    {...register("additionalNotes")}
                  />
                </div>
              </div>
            </div>

            {/* row 4 */}
            <div className="md:flex gap-4">
              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">
                  Food Donator Name
                </label>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={donatorName}
                    {...register("donatorName")}
                  />
                </div>
              </div>

              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">
                  Food Donator email
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={donatorEmail}
                    {...register("donatorEmail")}
                  />
                </div>
              </div>
            </div>

            {/* row 6 */}
            <div className="md:flex gap-4">
              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">
                  Request Date
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                      hour12: true,
                    })}
                    {...register("requestDate")}
                  />
                </div>
              </div>

              <div className="md:w-1/2 mb-5">
                <label className="text-xs font-semibold px-1">User Email</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                    value={user.email}
                    {...register("userEmail")}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-1/2 flex justify-center">
                <button className=" w-[60%] text-xl text-white relative px-5 py-2 font-semibold group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                  <span className="flex items-center justify-center gap-2 relative">
                    <span>Confirm Request</span>{" "}
                  </span>
                </button>
              </div>
              <div className="w-1/2">
                <form method="dialog" className="flex justify-center">
                  {/* if there is a button, it will close the modal */}
                  <button className="w-[60%] text-xl text-white relative px-5 py-2 font-semibold group">
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                    <span className="flex items-center justify-center gap-2 relative">
                      <span>Close</span>{" "}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default FoodDetails;
