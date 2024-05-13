import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";


const PrivateRouts = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

PrivateRouts.propTypes = {
    children: PropTypes.node
}
export default PrivateRouts;