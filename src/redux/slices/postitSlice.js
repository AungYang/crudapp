import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { postits: [], loading: false };

export const getPostits = createAsyncThunk(
  'postit/getPostits',
  async (thunkAPI) => {
    return [
      { title: 'postits 1', author: 'kaung' },
      { title: 'postits 2', author: 'yang' },
    ];
  }
);

const postitSlice = createSlice({
  name: 'postit',
  initialState,
  extraReducers: {
    [getPostits.fulfilled]: (state, action) => {
      console.log('signin.fulfilled', state, action);
      state.loading = false;
      state.postits = action.payload;
    },
  },
});

export const postitsReducer = postitSlice.reducer;
