import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from '../../firebase';

const initialState = { user: null, loading: false };

export const signin = createAsyncThunk('users/signin', async (data) => {
  // console.log(
  //   'userSlice async email password thunkAPI',
  //   email,
  //   password,
  //   thunkAPI
  // );el
  const { loginEmail, loginPassword } = data;
  console.log(
    'userslice email password',
    loginEmail,
    'loginPassword',
    loginPassword
  );
  try {
    const authUser = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log('Signed In Successful!');
    const {
      user: { email, uid },
    } = authUser;
    console.log('authUser.user email, uid', email, uid);
    return { email, uid };
  } catch (e) {
    console.error('Failed to login', e);
    return null;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      console.log('signin.fulfilled', state, action);
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
