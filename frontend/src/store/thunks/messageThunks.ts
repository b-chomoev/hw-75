import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';

export const encodeMessage = createAsyncThunk(
  'message/encodeMessage',
  async ({ message, password }: { message: string; password: string }) => {
    const response = await axiosApi.post('/encode', {message, password});
    return response.data.encoded;
  }
);

export const decodeMessage = createAsyncThunk(
  'message/decodeMessage',
  async ({ message, password }: { message: string; password: string }) => {
    const response = await axiosApi.post('/decode', {message, password});
    return response.data.decoded;
  }
);