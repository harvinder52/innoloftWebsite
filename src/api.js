import axios from "axios";

const API_URL = "https://api-test.innoloft.com/product/6781";
const API_BASE_URL = "https://api-test.innoloft.com";
export const fetchData = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: API_URL,
    headers: {},
  };

  try {
    const response = await axios.request(config);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchConfiguration = async (appId) => {
  const API_URL = `${API_BASE_URL}/configuration/${appId}`;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: API_URL,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
