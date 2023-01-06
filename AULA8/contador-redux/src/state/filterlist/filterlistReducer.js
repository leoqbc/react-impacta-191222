import { FILTER_LIST_SEARCH, FILTER_LIST_SET_USERS } from "./types";

const INITIAL_STATE = {
    search: '',
    users: [
        { id: 1, name: "Leanne Graham" },
        { id: 2, name: "Ervin Howell" },
        { id: 3, name: "Clementine Bauch" },
    ]    
};

export default function filterlistReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case FILTER_LIST_SEARCH:
            return {...state, search: payload };
        case FILTER_LIST_SET_USERS:
            return {...state, users: payload };
        default:
            break;
    }
    return state;
} 