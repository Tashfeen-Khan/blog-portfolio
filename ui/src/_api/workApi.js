import axios from "axios";
export const getAllWork =async()=>{
    try {
        const response = await axios.get("http://localhost:4000/admin/api/work");
        console.log("work", response.data); // Ensure to remove or comment this out in production
        return response.data;
      } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
      }
}
