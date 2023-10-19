import { createContext, useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from "./DataReducer";

const Data = createContext()

const initialState = {
    isLoading: false,
    isError: false,
    products: []
}

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getData = async () => {
        dispatch({ type: "Set_Loading" })
        try {
            const data = await axios.get("http://localhost:4005/api/products").then(res => res.data).catch(err => console.log(err))
            dispatch({ type: "Set_Api_Data", payload: data })
        } catch (error) {
            dispatch({ type: "Set_Api_Error" })
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <Data.Provider value={{ ...state }}>
            {/* {children} */}
        </Data.Provider>
    )
}

export default Data
