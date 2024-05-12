import { FaCircleChevronRight } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const FeaturedCard = ({ food }) => {
  const location = useLocation();


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
    foodStatus,
  } = food;

  console.log(foodImage);
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="700"
        className="border rounded-2xl border-[#32CD32] p-7 shadow-xl"
      >
        <figure>
          <img
            className="h-[200px] w-full rounded-2xl"
            src={foodImage}
            alt="Food image"
          />
        </figure>
        <div className="card-body p-0 space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="gap-2 text-[18px] font-semibold mt-3">{foodName}</h2>
            <h2 className="gap-2 text-[18px] font-semibold mt-4 text-[#49e249] px-3 py-1 border border-[#32CD32] rounded-full ">
              {foodStatus}
            </h2>
          </div>

          <div className=" mt-4">
            <p className="flex items-center gap-2 text-[18px] font-semibold">
              {" "}
              <IoLocation className="text-[#32CD32]"></IoLocation> Pickup
              Location :
            </p>
            <p className="text-[16px] font-medium ml-7"> {pickupLocation}</p>
          </div>
          <hr />

          <ul className="ml-8 list-disc">
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

          <hr />

          <div className="flex gap-6 md:flex-col lg:flex-row md:gap-1">
            <div className="flex gap-2 items-center text-[18px] font-semibold">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={donatorImage} />
                </div>
              </div>
              <div>
                <p className="text-[14px] font-medium">Donator :</p>
                <p> {donatorName}</p>
              </div>
            </div>
          </div>
          <div className="card-actions mx-auto mt-4">
            <Link
              to={`/details/${_id}`}
              state={location.pathname}
              className="relative px-5 py-2 font-medium text-green-600 group"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:skew-x-[18deg]"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#32CD32] group-hover:border-[#32CD32] group-hover:-skew-x-[18deg]"></span>
              <span className="relative">View Details</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

FeaturedCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FeaturedCard;
