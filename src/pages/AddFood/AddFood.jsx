import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, image, quantity, location, date, notes, status } = data;

    const newFood = {
      foodName: name,
      foodImage: image,
      quantityAvailable: quantity,
      pickupLocation: location,
      expiryDateTime: date,
      additionalNotes: notes,
      foodStatus: status,
      donatorImage: user?.photoURL,
      donatorName: user?.displayName,
      donatorEmail: user?.email,
    };

    axiosSecure
      .post("/addFood", newFood)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            title: "Added",
            text: "Your food has been Added.",
            icon: "success",
          });
          navigate("/availableFoods");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "Error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  return (
    <>
      <div className="w-full">
        <Helmet>
          <title>Yummy || Add Food</title>
        </Helmet>
        <div
          style={{
            backgroundImage:
              "url(https://i.ibb.co/c3R6bpD/pexels-hebaysal-2776479.jpg)",
          }}
          className="bg-cover bg-center rounded-b-3xl"
        >
          <div className="min-w-screen min-h-screen pt-32 pb-24 bg-gray-900 bg-opacity-80 flex items-center justify-center px-5 rounded-b-3xl">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden md:max-w-[90%]">
              <div className="md:flex w-full">
                <div className="hidden md:block w-[40%] bg-[#32CD32]">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src="https://i.ibb.co/261Fw5x/Stuck-at-Home-Working-from-Home.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-[60%] py-10 px-5 md:px-10">
                  <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">
                      ADD YOUR FAVOURITE FOOD
                    </h1>
                    <p>Enter Food Information To Add</p>
                  </div>

                  <form className="" onSubmit={handleSubmit(onSubmit)}>
                    {/* row 1 */}
                    <div className="md:flex gap-4">
                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Food Name
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Food Name"
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <span className="text-red-500 font-bold pl-3">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Photo URL
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Photo URL"
                            {...register("image", { required: true })}
                          />
                          {errors.image && (
                            <span className="text-red-500 font-bold pl-3">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* row 2 */}
                    <div className="md:flex gap-4">
                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Food Quantity
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Food Quantity"
                            {...register("quantity", { required: true })}
                          />
                          {errors.quantity && (
                            <span className="text-red-500 font-bold pl-3">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Pickup Location
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Pickup Location"
                            {...register("location", { required: true })}
                          />
                          {errors.location && (
                            <span className="text-red-500 font-bold pl-3">
                              This field is required
                            </span>
                          )}
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
                            placeholder="Expired Date"
                            {...register("date", { required: true })}
                          />
                          {errors.location && (
                            <span className="text-red-500 font-bold pl-3">
                              This field is required
                            </span>
                          )}
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
                            placeholder="Additional Notes"
                            {...register("notes")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* row 4 */}
                    <div className="md:flex gap-4">
                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Food Status
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full py-2 pl-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Food Status"
                            defaultValue={"Available"}
                            {...register("status")}
                          />
                        </div>
                      </div>

                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Donator Image
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            placeholder="Donator photo URL"
                            value={user?.photoURL}
                            {...register("donatorImage")}
                          />
                        </div>
                      </div>
                    </div>

                    {/* row 6 */}
                    <div className="md:flex gap-4">
                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Donator Name
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            value={user?.displayName}
                            placeholder="Donator Name"
                            {...register("donatorName")}
                          />
                        </div>
                      </div>

                      <div className="md:w-1/2 mb-5">
                        <label className="text-xs font-semibold px-1">
                          Donator Email
                        </label>
                        <div className="flex flex-col">
                          <input
                            type="text"
                            className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                            value={user?.email}
                            placeholder="Donator Email"
                            {...register("donatorEmail", { required: true })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button className=" w-[70%] text-xl text-white relative px-5 py-2 font-semibold group">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] bg-[#188d18] group-hover:bg-[#32CC32] group-hover:skew-x-[18deg]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] bg-[#32CC32] group-hover:bg-[#188d18] group-hover:-skew-x-[18deg]"></span>

                        <span className="flex items-center justify-center gap-2 relative">
                          <span>Add Food</span>{" "}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFood;
