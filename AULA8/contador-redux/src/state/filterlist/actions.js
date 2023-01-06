import { FILTER_LIST_SEARCH, FILTER_LIST_SET_USERS } from "./types";

export function actionSearch(text) {
    return {
        type: FILTER_LIST_SEARCH,
        payload: text
    };
}

export function actionSetUsers(users) {
    return {
        type: FILTER_LIST_SET_USERS,
        payload: users
    };
}