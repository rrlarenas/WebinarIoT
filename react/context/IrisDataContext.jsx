import { createContext, useState } from "react";


const IrisDataConext = createContext()

export const IrisProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [irisData, setData] = useState([])


//Get Last read from backEnd
   const fetchLastData = async (vMet) => {
   
    const response = await fetch(`/LastMedicion/${vMet}`)

    const data = await response.json()
    setData(data)
    setIsLoading(false)
  }

  //Get X values from backend
  const fetchData = async (vMet,Cant) => {
   
    const response = await fetch(`/Mediciones/${vMet}/${Cant}`)

    const data = await response.json()
    setData(data)
    setIsLoading(false)
  }

  return <IrisDataConext.Provider
    value={{
      isLoading,
      irisData,
      setData,
      setIsLoading,
      fetchLastData,
      fetchData
    }}
  >
    {children}
  </IrisDataConext.Provider>

}


export default IrisDataConext