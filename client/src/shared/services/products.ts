import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const getAllProducts = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/products`);
  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await axios.get(`${API_BASE_URL}/products/${id}`);
  return data;
};
