import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    fname:'',
    lname:'',
    email:'',
    verified:false
}
export const userSlice = createSlice({
    name :'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
                    state.fname  = action?.payload?.given_name
                    state.lname  =action?.payload?.family_name.toLowerCase()
                    state.email = action?.payload?.email
                    state.verified = action?.payload?.email_verified
                }
    }
})

export const { setUser} = userSlice.actions

export const selectUser = (state) => state.user


export default userSlice.reducer
