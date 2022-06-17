import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const getItems = async (path) => {
  const { data } = await api.get(`${path}`)
    .catch((error) => error.response);

  return data;
};

export default getItems;
