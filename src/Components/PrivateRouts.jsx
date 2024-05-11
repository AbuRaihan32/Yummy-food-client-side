import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRouts = ({children}) => {
    const user = true;

    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

PrivateRouts.propTypes = {
    children: PropTypes.node
}
export default PrivateRouts;