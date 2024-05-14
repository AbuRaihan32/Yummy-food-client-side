import PropTypes from 'prop-types'

const MyRequestRow = ({food, index}) => {
    const {
        foodName,
        foodImage,
        pickupLocation,
        donatorName,
        expiryDateTime,
        foodStatus,
        requestDate
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
                <p className='px-2 bg-gray-100 rounded-full'>Donar: {donatorName}</p>
              </div>
            </div>
          </td>
          <td>{pickupLocation}</td>
          <td>{requestDate}</td>
          <td>{expiryDateTime}</td>
          <td><button className='text-[#32CD32] font-bold px-4 py-1 rounded-full bg-gray-200'>{foodStatus}</button></td>
        </tr>
      );
    };

MyRequestRow.propTypes = {
  food: PropTypes.object.isRequired,
  index: PropTypes.number
}    
export default MyRequestRow;