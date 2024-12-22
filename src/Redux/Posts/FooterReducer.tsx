import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFooter = createAsyncThunk(`footer/fetch`, async () => {
  try {
    const res = await axios.get(`http://localhost:3005/footer`)
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const FooterReducer = createSlice({
  name: `footer`,
  initialState: {
    footer: null,
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooter.fulfilled, (state, action) => {
        state.loading = false;
        {
          typeof action.payload == "string"
            ? (state.footer == null, (state.error = action.payload))
            : (state.footer = action.payload);
        }
      })
      .addCase(fetchFooter.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchFooter.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching footer!";
      });
  },
});

export default FooterReducer.reducer;
