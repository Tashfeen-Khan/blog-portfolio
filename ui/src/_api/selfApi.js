import axios from 'axios';

export const getSelfData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/admin/api/self");
    console.log("selfapi", response.data); // Ensure to remove or comment this out in production
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};
