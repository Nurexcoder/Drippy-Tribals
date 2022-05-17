// module.exports={
import axios from "axios";
const url = "http://localhost:5000/api";
// }
export const publicUrl = axios.create({
    baseURL: "http://localhost:5000/api",
});
