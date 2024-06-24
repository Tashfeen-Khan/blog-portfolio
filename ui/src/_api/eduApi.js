import axios from "axios";
export const getAllEdu =async()=>{
    try {
        const response = await axios.get("http://localhost:4000/admin/api/edu");
        // console.log("eduapi", response.data); // Ensure to remove or comment this out in production
        return response.data;
      } catch (error) {
        console.error('Error fetching data: ', error);
        throw error;
      }
}
