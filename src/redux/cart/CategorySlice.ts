import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  value: "men" | "women";
}

const initialState: CategoryState = {
  value: "men", // default category
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<"men" | "women">) => {
      state.value = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
