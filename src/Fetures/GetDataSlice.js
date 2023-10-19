import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("getAllData", () =>{
    const response = axios.get("https://prince-ecom-backend.onrender.com/api/products").then(res => res.data).catch(er => console.log(er))
    return response
})

export const getSingleProduct = createAsyncThunk("getSingleProduct", async (id) =>{
    const response = await axios.get(`https://prince-ecom-backend.onrender.com/api/products/${id}`).then(res => res.data).catch(er => console.log(er))
    return response
})


const GetDataSlice = createSlice({
    name: 'getData',
    initialState:{
        isLoading: false,
        isError: false,
        isSingleLoading: false,
        isSingleError: false,
        products:[],
        singleProduct: {},
        cartProduct: []
    },
    extraReducers:(builder)=>{
        //  Get All Product
        builder.addCase(getData.pending, (state) =>{
            state.isLoading = true
        })
        builder.addCase(getData.fulfilled, (state, action) =>{
            state.isLoading = false
            state.products = action.payload
        })
        builder.addCase(getData.rejected, (state, action) =>{
            state.isError = true
            console.log(action.payload)
        })

        // Get Single Product
        builder.addCase(getSingleProduct.pending, (state) =>{
            state.isSingleLoading = true
        })
        builder.addCase(getSingleProduct.fulfilled, (state, action) =>{
            state.isSingleLoading = false
            state.singleProduct = action.payload
            console.log(state.singleProduct)
        })
        builder.addCase(getSingleProduct.rejected, (state, action) =>{
            state.isSingleError = false
            console.log(action.payload)
        })
    }
})

export default GetDataSlice.reducer