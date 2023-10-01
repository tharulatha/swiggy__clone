import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: ["Apple","Mango"]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        }, 
        removeItem: (state, action) => {
            state.items.pop(action.payload)
        }, 
        clearItem: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;