import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    // Имя среза
    name: 'counter',
    // Начальное состояние
    initialState: {
        value: 0
    },
    // функции изменения состояния
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => { state.value += action.payload },
        decrementByAmout: (state, action) => { state.value -= action.payload }
    }
});
             // Action for dispatch
export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer