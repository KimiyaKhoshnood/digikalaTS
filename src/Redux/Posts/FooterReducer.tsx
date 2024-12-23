import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type FooterData = {
  contactUs: {text:string, id:number}[]
  digikalaAdvantages: {img:string, text:string, id:number}[]
  footerLists: {title:string, lists:{text:string, id:number}[], id:number}[]
  socialMedia: {img:string, id:number}[]
  downloadApp: {img:string, id:number}[]
  info: string[]
  readMoreBrands: {img:string, id:number}[]
  digiBrands: {img:string, id:number}[]
}

// the initial state type
type FooterState = {
  footer: FooterData | null;
  loading: boolean;
  error: string;
}

export const fetchFooter = createAsyncThunk<FooterData | string>(`footer/fetch`, async () => {
  try {
    const res = await axios.get(`http://localhost:3005/footer`)
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      return error.message || "An error occurred";
    }
    console.error("Unexpected error", error);
    return "Unexpected error occurred";
  }
});

const initialState: FooterState = {
  footer: null,
  loading: true,
  error: "",
}

const FooterReducer = createSlice({
  name: `footer`,
  initialState,
  reducers: {},
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
      .addCase(fetchFooter.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFooter.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching footer!";
      });
  },
});

export default FooterReducer.reducer;
