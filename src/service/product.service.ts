import { apiClient } from "@utils/api-client/apiClient";
import { API_ENDPOINTS } from "@utils/constant/constant";
import { Root } from "@utils/types/product";
import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess, setCurrentProductViewing } from "src/slice/product.slice";
import { AppThunk } from "src/store";


export const fetchProducts = (): AppThunk => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
        const response: any = await apiClient.get<Root>(
            API_ENDPOINTS.GET_PRODUCTS
        );
        if (!response.data.products.items) {
            throw new Error('Failed to fetch products');
        }
        dispatch(fetchProductsSuccess(response?.data?.products));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message || 'Failed to fetch products'));
    }
};

export const fetchProductDetails = (): AppThunk => async (dispatch) => {

    try {
        const response: any = await apiClient.get<any>(
            API_ENDPOINTS.GET_PRODUCT_DETAILS
        );
        if (!response?.data) {
            throw new Error('Failed to fetch products');
        }
        dispatch(setCurrentProductViewing(response?.data?.product[1] || {}));
    } catch (error) {
    }
};