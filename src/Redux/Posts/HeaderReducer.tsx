import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for header data
type HeaderData = {
  login: boolean
  productSorting: {text: string, icon: string, id: number}
  digikalaPagesNavbar: {text: string, icon: string, id: number}[]
  digikalaQuestionsNavbar: {text: string, id: number}[]
  locationNavbar: {text:string , icon:string}
  submenu: {
    title:string, 
    categories:{title: string, items: string[], id:number}[], 
    id:number}[]
}

// Define the initial state type
type HeaderState = {
  header: HeaderData | null;
  loading: boolean;
  error: string;
}

// Async thunk to fetch the header
export const fetchHeader = createAsyncThunk<HeaderData | string>(
  "header/fetch",
  async () => {
    try {
      const res = await axios.get<HeaderData>("http://localhost:3005/header");
      return res.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(error.message);
        return error.message || "An error occurred";
      }
      console.error("Unexpected error", error);
      return "Unexpected error occurred";
    }
  }
);

// Initial state
const initialState: HeaderState = {
  header: null,
  loading: true,
  error: "",
};

// Create slice
const HeaderReducer = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeader.fulfilled, (state, action: PayloadAction<HeaderData | string>) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.header = null;
          state.error = action.payload;
        } else {
          state.header = action.payload;
          state.error = "";
        }
      })
      .addCase(fetchHeader.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHeader.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching header!";
      });
  },
});

export default HeaderReducer.reducer;
