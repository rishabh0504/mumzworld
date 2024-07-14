import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '@types/product';

interface ProductsState {
    items: Item[],
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
}

export const productSlice = createSlice({
    name: 'products',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        fetchProductsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action: PayloadAction<Item[]>) => {
            state.loading = false;
            state.items = action.payload;
        },
        fetchProductsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})
export const { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;
export default productSlice.reducer;
