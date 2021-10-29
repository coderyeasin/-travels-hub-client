import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config"

const travelAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default travelAuthentication;