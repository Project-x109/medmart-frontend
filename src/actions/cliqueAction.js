import axios from "axios";
import { URL } from "../App";
import { lOAD_CHAT_FAIL, lOAD_CHAT_REQUEST, lOAD_CHAT_SUCCESS } from "../constants/cliqueConstants";

export const loadChat = () => async (dispatch) => {
    try {

        dispatch({ type: lOAD_CHAT_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const { data } = await axios.get(`${URL}/api/v1/sent`);
        // reciverid,
        // config
        // );

        dispatch({
            type: lOAD_CHAT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: lOAD_CHAT_FAIL,
            payload: error.response.data.message,
        });
    }
};
