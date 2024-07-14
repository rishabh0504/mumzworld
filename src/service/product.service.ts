import { apiClient } from "@utils/api-client/apiClient";
import { API_ENDPOINTS } from "@utils/constant/constant";
import { Root } from "@utils/types/product";
import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from "src/slice/product.slice";
import { AppThunk } from "src/store";


export const fetchProducts = (): AppThunk => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const response: Root = await apiClient.get<Root>(
            API_ENDPOINTS.GET_PRODUCTS
        );
        if (!response.data.products.items) {
            throw new Error('Failed to fetch products');
        }
        dispatch(fetchProductsSuccess(response?.data?.products?.items));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message || 'Failed to fetch products'));
    }
};