import axios from 'axios';

const getAllBlogs = async () => {
  try {
    const response = await axios.get("http://localhost:4000/admin/api/blogs");
    // console.log(response.data);
    return response.data;  // Return the data directly
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;  // Throw the error to be caught by the thunk
  }
};

export default getAllBlogs;
