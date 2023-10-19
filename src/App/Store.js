import {configureStore} from '@reduxjs/toolkit'
import GetDataSlice from '../Fetures/GetDataSlice'
import CartSlice from '../Fetures/CartSlice'

export default configureStore({
    reducer: {
        products: GetDataSlice,
        cart: CartSlice
    }
})