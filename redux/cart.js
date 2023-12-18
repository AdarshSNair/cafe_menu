import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartList: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.cartList.find((item) => item.disID === action.payload);
            if (itemExist) {
                state.cartList.forEach((item) => {
                    if (item?.disID === action.payload) {
                        item.count = 1;
                    }
                });
                return;
            }
            state.cartList.push({
                disID: action.payload,
                count: 1,
            })
        },
        increment: (state, action) => {
            const menuDishID = action.payload;
            state.cartList.forEach((item) => {
                if (item?.disID === menuDishID) {
                    item.count++;
                }
            });
        },
        decrement: (state, action) => {
            const menuDishID = action.payload;
            state.cartList.forEach((item) => {
                if (item?.disID === menuDishID) {
                    item.count--;
                }
            });
        },
    },
});

export const { increment, decrement, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
