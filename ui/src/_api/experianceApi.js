import axios from "axios";
export const getAllExp =async()=>{
    try {
        const response = await axios.get("http://localhost:4000/admin/api/exp");
        console.log("expapi", response.data); // Ensure to remove or comment this out in production
        return response.data;
      } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
      }
}
