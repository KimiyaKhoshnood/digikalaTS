import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ProductData = {
  image: string
  available: boolean
  productName: string
  englishName: string
  rates: {starsPersian: string, starsEnglish: number, voterStar: string, opinions: string, questions: string, comments: string}
  insurance: {insuranceName: string, price: string, offPrice: string,
  offPercent: string}
  colors: {colorName:string, colorTag:string, colorPersian:string, id: number}[]
  AddressP: {text:string, id:number}[]
  MainProductInfoP: {features: {title:string, detail:string, id:number}[]}
  ProductSellers: {title: string, selection: boolean, satisfaction: string, performance: string, days: number, guarantee: string, price: string, plusService: boolean, id:number}[]
  selected: {color: string}
  digikalaAdvantagesP: {img:string, text:string, id:number}[]
  SimilarProductsP: {image:string, title:string, oldPrice:string, newPrice:string, off:string, id:number}[]
  RelatedVideosP: {video:string, title:string, profilePic:string, accountName:string, id:number}[]
  RelatedTagsP: {text:string, id:number}[]
  PindoRelatedP: {img:string, title:string, price:string, id:number}[]
  ProductSwiperP: {imgLg:string, imgSm:string, id:number}[]
  DetailsSectionP: {
    introduction:string, 
    professionalDetails:{introduction:string ,img:string}, 
    tableDetails: {
      title:string, 
      detail:string, 
      id:number}[], 
    comments: {
      img:string, 
      user:string, 
      rateEnglish:number, 
      date:string,
      comment:string, 
      guaranteeName:string, 
      color:string, 
      like:number, 
      dislike:number, 
      id:number}[], 
    questions: {
      question:string, 
      answer:{
        answer: string, 
        user: string, 
        tag: string, 
        like:number, 
        dislike:number
      }|null, 
      id:number}[]
    }
  BoughtTogetherP: {image:string, title:string, oldPrice:string, newPrice:string, off:string, id:number}[]
}


// the initial state type
type ProductState = {
  product: ProductData | null;
  loading: boolean;
  error: string;
}

export const fetchProduct = createAsyncThunk<ProductData | string,string>(`product/fetch`, async (title="") => {
  try {
    const res = await axios.get(`http://localhost:3005/product?${title}`)
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

const initialState: ProductState = {
  product: null,
  loading: true,
  error: "",
};

const ProductReducer = createSlice({
  name: `product`,
  initialState,
  reducers: {},
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
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
        state.error = "error fetching product!";
      });
  },
});

export default ProductReducer.reducer;