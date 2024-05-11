import { FaCircleChevronRight, FaUser } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const FeaturedCard = () => {
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
            src={''}
            alt="spot-image"
          />
        </figure>
        <div className="card-body p-0 space-y-1">
          <h2 className="gap-2 text-[18px] font-semibold mt-3">
            Title
          </h2>
          <p>
            <span className="text-[18px] font-semibold mt-3">
              Country Name:
            </span>{" "}
            Paragraph
          </p>
          <div className="flex justify-between mt-4">
            <p className="flex items-center gap-2 text-[18px] font-semibold">
              {" "}
              <IoLocation className="text-[#32CD32]"></IoLocation> {location}
            </p>
          </div>
          <hr />

          <ul className="ml-8 list-disc">
            <li className="flex items-center gap-2">
              {" "}
              <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight>
              Li 
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight>
              Li
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <FaCircleChevronRight className="text-[#32CD32]"></FaCircleChevronRight>
              li 
            </li>
          </ul>

          <hr />
          <div className="flex gap-6 md:flex-col lg:flex-row md:gap-1">
            <div className="flex gap-2 items-center text-[18px] font-semibold mt-3">
              <FaUser className="text-[#32CD32]"></FaUser>
              <p> Paragraph </p>
            </div>
          </div>
          <div className="card-actions mx-auto mt-4">
            <Link
              to={`/details`}
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

export default FeaturedCard;
