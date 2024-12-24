import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../../axiosApi.ts';

export const encodeMessage = createAsyncThunk<string, {message: string, password: string}>(
  'cipher/encode',
  async (messageToEncode) => {
    const response = await axiosApi.post<string>('/cipher/encode', messageToEncode);
    return response.data;
  }
);

export const decodeMessage = createAsyncThunk<string, {message: string, password: string}>(
  'cipher/decode',
  async (messageToDecode) => {
    const response = await axiosApi.post<string>('/cipher/decode', messageToDecode);
    return response.data;
  }
);