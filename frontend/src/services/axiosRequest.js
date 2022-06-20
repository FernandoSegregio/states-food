import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const getItems = async (path, auth) => {
  const { data } = await api.get(`${path}`, { headers: { Authorization: auth } })
    .catch((error) => error.response);
  return data;
};

const postItems = async (path, body, auth) => {
  if (!auth) {
    const { data, status, message } = await api.post(`${path}`, body)
      .catch((error) => error.response);
    return { data, status, message };
  }

  if (!body) {
    const { data } = await api
      .post(`${path}`, {}, { headers: { Authorization: auth } })
      .catch((error) => error.response);
    return data;
  }

  if (body && auth) {
    const { data } = await api
      .post(`${path}`, body, { headers: { Authorization: auth } })
      .catch((error) => error.response);
    return data;
  }
  return null;
};

export { getItems, postItems };
