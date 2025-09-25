import axios from 'axios';
import { retriveLocalStorage } from './helpers.ts';
import type { IUserWithTokens } from '../models/IUserWithTokens.ts';
import type { IProduct } from '../models/IProduct.ts';
import type { IProductsResponseModelType } from '../models/IProductsResponseModelType.ts';
import type { ITokenPair } from '../models/ITokenPair.ts';

// Request model for login
type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};

// Axios instance with a base URL for authentication requests
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {}
});

// Interceptor to axios instance (runs before each request)
axiosInstance.interceptors.request.use((requestObject) => {
  // If request is a GET request
  if (requestObject.method?.toUpperCase() === 'GET') {
    // Add Authorization header with Bearer token from localStorage
    requestObject.headers.Authorization =
      'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
  }

  // Return modified request object
  return requestObject;
});

// Function to login the user
export const login = async ({
  username,
  password,
  expiresInMins
}: LoginData): Promise<IUserWithTokens> => {
  // Send POST request to /login with user credentials
  const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>(
    '/login',
    { username, password, expiresInMins }
  );

  console.log('userWithTokens: ', userWithTokens);

  // Save user data with tokens to localStorage
  localStorage.setItem('user', JSON.stringify(userWithTokens));

  // Return user data with tokens
  return userWithTokens;
};

// Function to load products that require authentication
export const loadAuthProducts = async (): Promise<IProduct[]> => {
  // Send GET request to /products endpoint
  const {
    data: { products }
  } = await axiosInstance.get<IProductsResponseModelType>('/products');

  return products;
};

// Function to refresh tokens when they expire
export const refresh = async () => {
  // Get user with tokens from localStorage
  const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
  // Send POST request to refresh endpoint with refreshToken
  const {
    data: { accessToken, refreshToken }
  } = await axiosInstance.post<ITokenPair>('/refresh', {
    refreshToken: iUserWithTokens.refreshToken,
    expiresInMin: 1
  });

  // Update local copy of tokens
  iUserWithTokens.accessToken = accessToken;
  iUserWithTokens.refreshToken = refreshToken;

  // Save updated tokens back to localStorage
  localStorage.setItem('user', JSON.stringify(iUserWithTokens));
};
