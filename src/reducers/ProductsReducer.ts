/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const productsReducer = (
  state: any,
  action: { type: string; payload?: any }
) => {
  if (action.type === SIDEBAR_OPEN) {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      allProductsLoading: true,
    };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured = action.payload.filter(
      (product: any) => product.featured === true
    );
    return {
      ...state,
      allProductsLoading: false,
      allProducts: action.payload,
      featuredProducts: featured,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      allProductsLoading: false,
      allProductsError: true,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      singleProductLoading: true,
      singleProductError: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      singleProductLoading: false,
      singleProduct: action.payload,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      singleProductLoading: false,
      singleProductError: true,
    };
  }
};

export default productsReducer;
