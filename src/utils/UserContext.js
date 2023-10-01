
import { createContext } from "react"

const UserContext = createContext({
        user: {
             name: "Dummy Name",
             email: "useremail@gmail.com"  
       }
   }) 

export default UserContext