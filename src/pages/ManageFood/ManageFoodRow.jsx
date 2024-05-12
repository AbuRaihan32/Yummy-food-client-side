import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const ManageFoodRow = ({ food, index }) => {
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

  const handleDelete = (id) =>{
    console.log(id)
  }

  const handleUpdate = (id) =>{
    console.log(id)
  }

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
      <td>
        <button onClick={()=>handleUpdate(_id)} className="btn btn-circle btn-outline">
          <CiEdit className="text-xl"></CiEdit>
        </button>
      </td>
      <td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
          <RiDeleteBin6Line></RiDeleteBin6Line>
        </button>
      </td>
    </tr>
  );
};

export default ManageFoodRow;
