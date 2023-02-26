import { lOAD_CHAT_FAIL, lOAD_CHAT_REQUEST, lOAD_CHAT_SUCCESS } from "../constants/cliqueConstants";
import { CLEAR_ERRORS } from "../constants/userConstants";

export const chatsReducer = (state = { chat: [] }, { type, payload }) => {
    switch (type) {
        case lOAD_CHAT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case lOAD_CHAT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: payload.chat,
            };
        case lOAD_CHAT_FAIL:
            return {
                ...state,
                loading: false,
                error: payload, 
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
