import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(`product/fetch`, async (title="") => {
  try {
    const res = await axios.get(`http://localhost:3005/product?${title}`)
    return res.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

const ProductReducer = createSlice({
  name: `product`,
  initialState: {
    product: null,
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        {
          typeof action.payload == "string"
            ? (state.product == null, (state.error = action.payload))
            : (state.product = action.payload);
        }
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching product!";
      });
  },
});

export default ProductReducer.reducer;