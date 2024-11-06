import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchUserData=createAsyncThunk('user/fetchdata',async()=>{
    const response =await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})


const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
              .addCase(fetchUserData.pending,(state,action)=>{
                state.loading=true
              })
              .addCase(fetchUserData.fulfilled,(state,action)=>{
                state.loading=false
                state.users=action.payload
              })

              .addCase(fetchUserData.rejected,(state,action)=>{
                state.loading=false
                state.error=action.error.message
              })
           
    }
})

export default userSlice.reducer