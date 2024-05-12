import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyRequestRow = ({food, index}) => {
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
      return (
        <tr>
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={foodImage} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{foodName}</div>
              </div>
            </div>
          </td>
          <td>{pickupLocation}</td>
          <td>{expiryDateTime}</td>
        </tr>
      );
    };
export default MyRequestRow;