import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from '../../firebase';

const initialState = { user: null, loading: false };

export const signin = createAsyncThunk('users/signin', async (data, thunkAPI) => {
  const { loginEmail, loginPassword } = data;
  const { dispatch } = thunkAPI
  try {
    const authUser = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    const { user: { email, uid } } = authUser;
    console.log(`Signed in successfully! ${email} ${uid}`)
    // dispatch(setSignedIn({email, uid}));
  } catch (e) {
    console.error('Failed to login', e);
    return null;
  }
});


export const signup = createAsyncThunk('users/signup', async (data) => {
  const { registerEmail, registerPassword } = data;
  try {
    const authUser = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log('Signed up Successful!');
    const { user: { email, uid }, } = authUser;
    return { email, uid }; //payload
  } catch (e) {
    console.error('Failed to signup', e);
    return null;
  }
});


export const signout = createAsyncThunk("users/signout", async (data) => {
  await signOut(auth);

  return
  console.log("signed out from userSlice.js")
})


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSignedIn: (state, action) => {
      console.log("setSignedIn", action.payload)
      state.user = action.payload
      state.loading = false
    },

  },
  extraReducers: {
    [signout.fulfilled]: (state) => {
      state.user = null;
      state.loading = false;
    },

    // [signup.fulfilled]: (state, action) => {
    //   console.log('signup.fulfilled', state, action);
    //   state.loading = false;
    //   state.user = action.payload;
    // },
  },
});


export const { setSignedIn } = userSlice.actions
export const userReducer = userSlice.reducer;