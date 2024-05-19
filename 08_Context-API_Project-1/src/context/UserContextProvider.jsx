import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}> //use can give more values as you want
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;

