import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: "null",
}

export const userSlice = createSlice({
    name: 'user',
    initialState, 
    reducers:{      //reducers
        signin: (state, action) =>{
            state.user += action.payload;
        },
        signout: (state) =>{
            state.user = null;
        },
    },
})

export const {signin, signout} = userSlice.actions //exporting actions so we can call them 

export default userSlice.reducer; 