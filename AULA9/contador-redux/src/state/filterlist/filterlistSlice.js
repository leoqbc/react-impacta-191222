import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersFilterThunk, fetchUsersThunk } from "../../api/filterlistThunks";

const initialState = {
    users: [],
    search: '',
    isLoading: false,
    searchError: false
};

export const filterlistSlice = createSlice({
    name: 'filterlist',
    initialState,
    reducers: {
        searchName(state, action) {
            state.search = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsersThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsersThunk.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUsersFilterThunk.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(fetchUsersFilterThunk.rejected, (state, action) => {
                state.searchError = true;
            })
        ;
    }
});

export const { searchName } = filterlistSlice.actions;