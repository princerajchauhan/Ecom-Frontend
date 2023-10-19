import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartProduct = createAsyncThunk("cartProduct", async (id) => {
    const response = await axios.post(`https://prince-ecom-backend.onrender.com/api/getcart/`, { id }).then(res => res.data).catch(er => console.log(er))
    return response
})

export const addToCart = createAsyncThunk('addCart', async ({ id, productId, elem }) => {
    const data = JSON.parse(localStorage.getItem('allProducts'))
    const cartitemIndex = JSON.parse(localStorage.getItem('allProducts')).findIndex(item => item[0]._id === productId)
    console.log(cartitemIndex)
    if (cartitemIndex < 0) {
        data.push([elem, 1])
    }
    else {
        data[cartitemIndex][1] += 1
    }
    localStorage.setItem('allProducts', JSON.stringify(data))
    const response = await axios.post(`https://prince-ecom-backend.onrender.com/api/addtocart`, { id, productId }).then(res => res.data).catch(err => console.log(err))
    return response
})

export const removeFromCart = createAsyncThunk('removecart', async ({ id, productId }) => {
    const response = await axios.post(`https://prince-ecom-backend.onrender.com/api/removeproduct`, { id, productId }).then(res => res.data).catch(err => console.log(err))
    return response
})

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        isLoading: false,
        isError: false,
        subTotal: 0,
        totalAmount: 0
    },
    extraReducers: (builder) => {
        // Get Cart Product
        builder.addCase(getCartProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCartProduct.fulfilled, (state, action) => {
            state.isLoading = false
            localStorage.setItem('allProducts', JSON.stringify(action.payload.user))
            state.cart = action.payload
            if (action.payload.user) {
                state.totalAmount = 0
                action.payload.user.map((ele) => {
                    return state.totalAmount += ele[0].price * ele[1]
                })
                state.subTotal = 0
                action.payload.user.map((ele) => {
                    return state.subTotal += ele[1]
                })
            }
        })
        builder.addCase(getCartProduct.rejected, (state, action) => {
            state.isError = false
            console.log(action.payload)
        })

        // Add Product To Cart 
        builder.addCase(addToCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addToCart.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(addToCart.rejected, (state, action) => {
            state.isError = false
            console.log(action.payload)
        })

        // Remove Product From Cart 
        builder.addCase(removeFromCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(removeFromCart.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(removeFromCart.rejected, (state, action) => {
            state.isError = false
            console.log(action.payload)
        })
    },
    reducers: {
        // addToCart: (state, action) => {
        //     console.log(action.payload.price)
        //     const existing = state.cart.find(ele => ele.id == action.payload.id)
        //     // console.log(existing)
        //     if (!existing) {
        //         state.cart.push(action.payload)
        //     }
        //     else {
        //         existing.quantity = existing.quantity + 1
        //     }
        //     state.subTotal = state.subTotal + 1
        //     state.totalAmount = state.totalAmount + action.payload.price
        // },
        // removeFromCart: (state, action) => {
        //     console.log(action.payload.price)
        //     const existing = state.cart.find(ele => ele.id == action.payload.id)
        //     console.log(existing.id)
        //     if (existing.quantity > 1) {
        //         existing.quantity = existing.quantity - 1
        //     }
        //     else {
        //         state.cart.splice(state.cart.findIndex(ele => ele.id === existing.id), 1)
        //     }
        //     state.subTotal = state.subTotal - 1
        //     state.totalAmount = state.totalAmount - action.payload.price
        // }
        subTot: (state) => {
            state.subTotal = 0
            JSON.parse(localStorage.getItem('allProducts')).map(ele => {
                state.subTotal += ele[1]
                return null
            })
        },
        totAmount: (state) => {
            state.totalAmount = 0
            JSON.parse(localStorage.getItem('allProducts')).map(ele => {
                state.totalAmount += ele[0].price * ele[1]
                return null
            })
        },
        empytCart: (state) => {
            state.cart = []
            state.subTotal = 0
            state.totalAmount = 0
        }
    }
})

export default CartSlice.reducer

export const { empytCart, subTot, totAmount } = CartSlice.actions