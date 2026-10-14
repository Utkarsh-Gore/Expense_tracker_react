import { createContext, useState } from "react"
import { transactions } from "../data/data.js";

export const data=createContext();
function UserContext({children}) {
    const[array,Setarray]=useState(transactions)
  return (
    <data.Provider value={{array,Setarray}}>
        {children}    
    </data.Provider>
  )
}

export default UserContext