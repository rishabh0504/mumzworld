import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '@utils/types/product';

interface ProductsState {
    items: Item[],
    loading: boolean;
    error: string | null;
    currentProductViewing: Item
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
    currentProductViewing: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.currentProductViewing = null
        },
        fetchProductsSuccess: (state, action: PayloadAction<Item[]>) => {
            state.loading = false;
            state.items = action.payload;
            state.currentProductViewing = null
        },
        fetchProductsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.currentProductViewing = null
        },
        currentProductViewing: (state, action: PayloadAction<Item>) => {
            state.loading = false;
            state.error = null;
            state.currentProductViewing = action.payload;
        },
        resetCurrentProductViewing: (state) => {
            state.loading = false;
            state.error = null;
            state.currentProductViewing = null;
        }
    },
})
export const { fetchProductsRequest, fetchProductsSuccess,
    fetchProductsFailure, currentProductViewing,
    resetCurrentProductViewing } = productSlice.actions;
export default productSlice.reducer;
