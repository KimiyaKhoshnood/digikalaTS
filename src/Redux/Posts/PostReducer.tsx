import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(`home/fetch`, async () => {
  try {
    const res = await axios.get(`http://localhost:3005/home`)
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const PostReducer = createSlice({
  name: `home`,
  initialState: {
    home: null,
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        {
          typeof action.payload == "string"
            ? (state.home == null, (state.error = action.payload))
            : (state.home = action.payload);
        }
      })
      .addCase(fetchPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching home!";
      });
  },
});

export default PostReducer.reducer;
