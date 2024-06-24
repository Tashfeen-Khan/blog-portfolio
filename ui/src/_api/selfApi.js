import axios from 'axios';

export const getSelfData = async () => {
  try {
    const response = await axios.get("http://localhost:4000/admin/api/self");
   // Ensure to remove or comment this out in production
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};

export const updateSelfApi = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:4000/admin/api/self/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'An error occurred while updating the self model');
  }
};
