import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(`user/fetch`, async () => {
  try {
    const res = await axios.get(`http://localhost:3005/user`)
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const UserReducer = createSlice({
  name: `user`,
  initialState: {
    user: null,
    loadingUser: true,
    errorUser: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loadingUser = false;
        {
          typeof action.payload == "string"
            ? (state.user == null, (state.errorUser = action.payload))
            : (state.user = action.payload);
        }
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.loadingUser = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loadingUser = false;
        state.errorUser = "error fetching user!";
      });
  },
});

export default UserReducer.reducer;