import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 ,condition:true},
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            if (state.value !== 0) {
                state.value = state.value - 1;
            }

        },
        reset: (state) => {
            state.value = 0;
        },
        changeCondition:(state)=>{
            state.condition=!state.condition
           

        }
    },
});

export const { increment, decrement, reset,changeCondition } = counterSlice.actions;
export default counterSlice.reducer;

