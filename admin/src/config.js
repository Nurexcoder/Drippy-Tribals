// module.exports={
import axios from "axios";
const url = "https://envtestfrom.herokuapp.com/api";
const localUrl = "http://localhost:5000/api";
// }
export const publicUrl = axios.create({
    baseURL: localUrl,
});
