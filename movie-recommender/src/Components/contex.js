import React, { useState, useContext } from 'react'

// make sure to use https


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
 const [type, setType] = useState("");
const updateType=(val)=>{
  setType(val);
}
  return (
    <AppContext.Provider value={{type,updateType}}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const GlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
