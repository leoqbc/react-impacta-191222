import { createAsyncThunk } from "@reduxjs/toolkit";

async function fetchUsers(search = '') {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users${search}`);
    if (result.ok) {
        return await result.json();
    }
    throw new Error('Falha na busca');
}

export const fetchUsersThunk = createAsyncThunk('filterlist/fetchUsers', async () => {
    return await fetchUsers();
});

export const fetchUsersFilterThunk = createAsyncThunk('filterlist/fetchUsersFilter', async (payload) => {
    return await fetchUsers(`?name_like=${payload}`);
});