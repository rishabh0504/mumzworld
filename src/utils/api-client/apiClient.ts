// api/apiClient.ts

import axiosInstance from './axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

type ApiResponse<T> = AxiosResponse<T>;
type ApiError = AxiosError;

const get = async <T>(url: string, params?: Record<string, unknown>): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.get<T>(url, { params });
        return response;
    } catch (error) {
        throw error as ApiError;
    }
};

const post = async <T>(url: string, data: unknown): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.post<T>(url, data);
        return response;
    } catch (error) {
        throw error as ApiError;
    }
};

const put = async <T>(url: string, data: unknown): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.put<T>(url, data);
        return response;
    } catch (error) {
        throw error as ApiError;
    }
};

const del = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const response = await axiosInstance.delete<T>(url);
        return response;
    } catch (error) {
        throw error as ApiError;
    }
};

export const apiClient = {
    get,
    post,
    put,
    del,
};
