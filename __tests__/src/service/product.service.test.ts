import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiClient } from '@utils/api-client/apiClient'; // Mocked API client
import { API_ENDPOINTS } from '@utils/constant/constant'; // Mocked API endpoint constants
import { Root } from '@utils/types/product'; // Mocked type for API response
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
} from 'src/slice/product.slice'; // Mocked Redux actions
import { AnyAction } from 'redux';
import { RootState } from 'src/store'; // Mocked RootState
import mockAxios from 'axios'; // Mocked Axios instance for apiClient
import { fetchProducts } from 'src/service/product.service';

const middlewares = [thunk];
const mockStore = configureMockStore<RootState, any>(middlewares);

jest.mock('@utils/api-client/apiClient'); // Mock apiClient module

describe('fetchProducts', () => {
    let store: ReturnType<typeof mockStore>;
    beforeEach(() => {
        store = mockStore();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('dispatches fetchProductsSuccess action if API call succeeds', async () => {
        const mockProductsResponse: Root = {
            data: {
                products: {
                    items: [
                        // Mocked product items
                        { id: 1, name: 'Product 1', price: 100 },
                        { id: 2, name: 'Product 2', price: 150 },
                    ],
                },
            },
        };

        // Mock successful API response
        (apiClient.get as jest.MockedFunction<typeof apiClient.get>).mockResolvedValue({
            data: mockProductsResponse,
        });

        // Define expected actions
        const expectedActions = [
            fetchProductsRequest(),
            fetchProductsSuccess(mockProductsResponse.data.products),
        ];

        // Dispatch the fetchProducts thunk
        await store.dispatch(fetchProducts() as any); // Use `as any` to handle thunk typing

        // Check if the dispatched actions match the expected actions
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches fetchProductsFailure action if API call fails', async () => {
        const errorMessage = 'Failed to fetch products';

        // Mock API call failure
        (apiClient.get as jest.MockedFunction<typeof apiClient.get>).mockRejectedValue({
            message: errorMessage,
        });

        // Define expected actions
        const expectedActions = [
            fetchProductsRequest(),
            fetchProductsFailure(errorMessage),
        ];

        // Dispatch the fetchProducts thunk
        await store.dispatch(fetchProducts() as any); // Use `as any` to handle thunk typing

        // Check if the dispatched actions match the expected actions
        expect(store.getActions()).toEqual(expectedActions);
    });
});
