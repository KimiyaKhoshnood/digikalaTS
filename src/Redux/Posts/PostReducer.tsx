import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type HomeData = {
  UserStoriesP: {text:string, img:string, id:number, status?:string}[]
  MainSwiperImagesP: {imageLg:string, imageSm:string, id:number}[]
  HighlightItemsP: {text:string, image:string, id: number}[]
  AmazingSuggestionP: {image: string, title: string, oldPrice: string, newPrice: string, off: string, id:number}[]
  ASupermarketItemsP: {image:string, off:string, id:number}[]
  FourPicItemsP: {image:string, id:number}[]
  BuyBySortingItemsP: {image:string, text:string, id:number}[]
  TwoPicItemsP: {image:string, id:number}[]
  YourIntrestP: {title:string, images:{title:string ,img:string, id:number}[], id:number}[]
  DigiclubP: {title:string, icon:string, image:string, id:number}[]
  SellSelectionP: {img:string, offPrice:string, price:string, offPercent:string, id:number}[]
  BlogP: {img:string, text:string, id:number}[]
}

// the initial state type
type HomeState = {
  home: HomeData | null;
  loading: boolean;
  error: string;
}

export const fetchPost = createAsyncThunk<HomeData | string>(`home/fetch`, async () => {
  try {
    const res = await axios.get<HomeData>(`http://localhost:3005/home`)
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

const initialState: HomeState = {
  home: null,
  loading: true,
  error: "",
}

const PostReducer = createSlice({
  name: `home`,
  initialState,
  reducers: {},
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
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPost.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching home!";
      });
  },
});

export default PostReducer.reducer;
