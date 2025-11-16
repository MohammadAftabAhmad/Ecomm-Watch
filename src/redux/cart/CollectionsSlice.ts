import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const storedCollections = localStorage.getItem("collectionItems");
const initialItems = storedCollections ? JSON.parse(storedCollections) : [];

type CollectionItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const CollectionsSlice = createSlice({
  name: "collections",
  initialState: {
    items: initialItems,
  },
  reducers: {
    addToCollections: (state, action: PayloadAction<CollectionItem>) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("collectionItems", JSON.stringify(state.items));
    },

    removeFromCollections: (state, action) => {
      state.items = state.items.filter(
        (_: any, index: number) => index !== action.payload
      );
      localStorage.setItem("collectionItems", JSON.stringify(state.items));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCollections,

  removeFromCollections,
} = CollectionsSlice.actions;

export default CollectionsSlice.reducer;
