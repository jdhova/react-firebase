import { createContext, useContext } from "react";
import{
   createUserWithEmailAndPassword,
 
} from 'firebase/auth'
import {auth} from '../firebase'

const UserContext = createContext()

// export const AuthContextProvider = UserContext.Provider

export const AuthContextProvider = ({children}) => {

    const createUser = (userid, email, password) => {    
        
        return createUserWithEmailAndPassword(auth, email, userid, password) }

        return(
        <UserContext.Provider value={{createUser}}>
            {children}
            </UserContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(UserContext)
    }
