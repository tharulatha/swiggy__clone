import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Contact = () => {  
    const {user, setUser} = useContext(UserContext)
    return (
        <>
            <input value={user.name} onChange={
               e => setUser({
                   ...user,
                   name: e.target.value
               })//update the user object
            }></input>
              <input value={user.email} onChange={
               e => setUser({
                    ...user,
                   email: e.target.value
               })//update the user object
            }></input>
            <h1>This is the Contact Us Page</h1>
            <h2>Contact Details:</h2>
            <h3>Banglore</h3>
            <h4>8798709809</h4>
        </>
  )  


}

export default Contact