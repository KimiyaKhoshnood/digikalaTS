import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type FooterData = {id:string, PhoneOrEmail:string}[]

// the initial state type
type FooterState = {
  user: FooterData | null;
  loadingUser: boolean;
  errorUser: string;
}


export const fetchUser = createAsyncThunk<FooterData | string>(`user/fetch`, async () => {
  try {
    const res = await axios.get<FooterData>(`http://localhost:3005/user`)
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
      return error.message || "An error occurred";
    }
    console.error("Unexpected error", error);
    return "Unexpected error occurred";
  }
});

const initialState: FooterState = {
  user: null,
  loadingUser: true,
  errorUser: "",
}

const UserReducer = createSlice({
  name: `user`,
  initialState,
  reducers: {},
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
      .addCase(fetchUser.pending, (state) => {
        state.loadingUser = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loadingUser = false;
        state.errorUser = "error fetching user!";
      });
  },
});

export default UserReducer.reducer;