import axios from "axios";
import config from "../data/config";
import { loginStart, loginSuccess, loginFailure } from "./userReducer";
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await axios.post(`${config.url}/auth/login`, user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        console.log(error);
        dispatch(loginFailure());
    }
};
