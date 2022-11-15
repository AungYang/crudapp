import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const RequireAuth = ({children}) =>{

    const user = useSelector((state) => {

        console.log("useSelector from RequireAuth", state);

        return state.user.email;
    })


    console.log("user from requireAuth", user);
    if (!user){
        return <Navigate to='/' />
    }

    return children
}