import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BATCH_SIZE } from '@utils/constant/constant';
import { Item } from '@utils/types/product';

interface ProductsPayloadResponse {
    items: Item[],
    total_count: number;
}
interface ProductsState {
    items: Item[],
    loading: boolean;
    error: string | null;
    currentProductViewing: Item | null;
    page: number;
    itemsPerPage: number;
    totalPages: number;
    products: Item[] // Keeping as we don't have pagenation
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
    currentProductViewing: null,
    products: [],
    page: 1,
    itemsPerPage: BATCH_SIZE,
    totalPages: 0,
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
        fetchProductsSuccess: (state, action: PayloadAction<ProductsPayloadResponse>) => {
            state.loading = false;
            state.items = action.payload.items || [];
            state.currentProductViewing = null;
            const products = state.items.slice(state.page - 1, state.page * state.itemsPerPage) || [];
            state.products = products;
            state.totalPages = Math.ceil(action.payload.total_count / state.itemsPerPage);
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
        },
        loadMoreProducts: (state) => {
            state.page = state.page + 1;
            const products = state.items.slice(state.page - 1, state.page * state.itemsPerPage) || [];
            state.products = products;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
})
export const { fetchProductsRequest, fetchProductsSuccess,
    fetchProductsFailure, currentProductViewing,
    resetCurrentProductViewing, loadMoreProducts, setLoading } = productSlice.actions;
export default productSlice.reducer;
