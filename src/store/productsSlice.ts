import type { Products, Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from ".";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: {} as Products,
        selected_product: {} as Product
    },
    reducers: {
        setStateProducts: (state, action: PayloadAction<Products>) => {
            state.products = action.payload;
        },
        setActiveProduct: (state, action: PayloadAction<Product>) => {
            state.selected_product = action.payload;
        },
    },
});

export const { setStateProducts, setActiveProduct } = productSlice.actions;
export const products_state = (state: AppState) => state.products.products;
export const selected_product_state = (state: AppState) => state.products.selected_product;
export default productSlice.reducer;
