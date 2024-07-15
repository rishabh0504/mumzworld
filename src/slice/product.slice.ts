import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BATCH_SIZE } from '@utils/constant/constant';
import { Item } from '@utils/types/product';

// Default state for filter pagenation
const Default_With_Filter_Pagenation = {
    totalPages: 0,
    products: [],
    totalFilteredProductsBasedOnQuery: [], // Total filtered products out of which pagenation support to be provided
    page: 0,
}
// Default state for non pagenation

const Default_Without_Filter_Pagenation = {
    totalPages: 0,
    products: [], // As this is directlt coming from the sibling items so not needed anything like filter
    page: 0,
}


interface ProductsPayloadResponse {
    items: Item[],
    total_count: number;
}

interface ProductsState {
    items: Item[], // Total Product
    loading: boolean;
    error: string | null;
    currentProductViewing: Item | null;
    itemsPerPage: number;
    withFilterPagenation: {
        totalPages: number;
        products: Item[]; // Total filtered products based on pagenation
        page: number,
        totalFilteredProductsBasedOnQuery: Item[]; // Total filtered products based on query
    },
    withoutFilterPagenation: {
        totalPages: number;
        products: Item[]; // Used to avoid reset filtering by making extra api calls
        page: number,
    }
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
    currentProductViewing: null,
    itemsPerPage: BATCH_SIZE,
    withFilterPagenation: {
        totalPages: 0,
        products: [],
        totalFilteredProductsBasedOnQuery: [],
        page: 0,
    },
    withoutFilterPagenation: {
        totalPages: 0,
        products: [],
        page: 0,
    }
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProductsRequest: (state) => {
            state.loading = true;
            state.error = null;
            state.currentProductViewing = null;
        },
        fetchProductsSuccess: (state, action: PayloadAction<ProductsPayloadResponse>) => {
            // In our case, as we don't have pagenation support, we will always assume no filteration is needed during
            // the first time pagenation
            // Resetting with filter in case not handled by any developers properly
            state.withFilterPagenation = Default_With_Filter_Pagenation;
            // Setting withoutFilterPagenation

            state.loading = false;
            state.items = action.payload.items || [];
            state.currentProductViewing = null;
            state.withoutFilterPagenation.page = 1;
            state.withoutFilterPagenation.products = state.items.slice(0, state.itemsPerPage);
            state.withoutFilterPagenation.totalPages = Math.ceil(action.payload.total_count / state.itemsPerPage);
        },
        fetchProductsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
            state.currentProductViewing = null;
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
        loadMoreProducts: (state, action: PayloadAction<string | undefined>) => {
            const query = action.payload;
            if (query) {
                if (state.withFilterPagenation.page < state.withFilterPagenation.totalPages) {
                    state.withFilterPagenation.page += 1;
                    const newProducts = state.withFilterPagenation.totalFilteredProductsBasedOnQuery.slice((state.withFilterPagenation.page - 1) * state.itemsPerPage, state.withFilterPagenation.page * state.itemsPerPage);
                    state.withFilterPagenation.products = [...state.withFilterPagenation.products, ...newProducts];
                }
            } else {
                //Load more for without filter
                if (state.withoutFilterPagenation.page < state.withoutFilterPagenation.totalPages) {
                    state.withoutFilterPagenation.page += 1;
                    const newProducts = state.items.slice((state.withoutFilterPagenation.page - 1) * state.itemsPerPage, state.withoutFilterPagenation.page * state.itemsPerPage);
                    state.withoutFilterPagenation.products = [...state.withoutFilterPagenation.products, ...newProducts];
                }
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        aplyFilterWithQuery: (state, action: PayloadAction<string>) => {
            const query = action.payload;
            state.loading = false;
            state.currentProductViewing = null;
            state.withoutFilterPagenation = Default_Without_Filter_Pagenation;
            state.withFilterPagenation.page = 1;
            const totalFilteredProducts = state.items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
            state.withFilterPagenation.totalFilteredProductsBasedOnQuery = [...totalFilteredProducts];
            state.withFilterPagenation.products = state.withFilterPagenation.totalFilteredProductsBasedOnQuery.slice(0, state.itemsPerPage);
            state.withFilterPagenation.totalPages = Math.ceil(state.withFilterPagenation.totalFilteredProductsBasedOnQuery.length / state.itemsPerPage);
        },
        resetFilterQuery: (state) => {
            state.loading = false;
            state.withFilterPagenation = Default_With_Filter_Pagenation;
            state.currentProductViewing = null;
            state.withoutFilterPagenation.page = 1;
            state.withoutFilterPagenation.products = state.items.slice(0, state.itemsPerPage);
            state.withoutFilterPagenation.totalPages = Math.ceil(state.items.length / state.itemsPerPage);
        },
    },
});

export const {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    currentProductViewing,
    resetCurrentProductViewing,
    loadMoreProducts,
    setLoading,
    aplyFilterWithQuery,
    resetFilterQuery
} = productSlice.actions;

export default productSlice.reducer;
