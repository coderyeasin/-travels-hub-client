import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useLogin = () => {
    const { gogoleSignIn } = useAuth();
     let history = useHistory()
    let location = useLocation()
    const redirect_uri = location?.state?.from || "/home"

    const handleGoogle = () => {
        gogoleSignIn()
        .then(result => {
            history.push(redirect_uri)
            console.log(result.user);
    })
    }
    return {
        handleGoogle
    }
}
export default useLogin;