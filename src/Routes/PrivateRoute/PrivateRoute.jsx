import { useContext } from "react";
import { useAll } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(useAll)
    if (loading) {
        return <div className="grid justify-center min-h-screen content-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if (user) {
       return children
    }
    return <Navigate to={'/login'}></Navigate>
};
PrivateRoute.propTypes = {
    children : PropTypes.node
}
export default PrivateRoute;