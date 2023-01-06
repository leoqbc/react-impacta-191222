import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchName } from "../state/filterlist/filterlistSlice";
import { fetchUsersFilterThunk, fetchUsersThunk } from "../api/filterlistThunks";

const FilterList = () => {
    const users = useSelector(state => state.filterlist.users);
    const search = useSelector(state => state.filterlist.search);
    const isLoading = useSelector(state => state.filterlist.isLoading);
    const searchError = useSelector(state => state.filterlist.searchError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersThunk());
    }, [dispatch]);

    const inputSearch = async (event) => {
        dispatch(searchName(event.target.value));
        dispatch(fetchUsersFilterThunk(event.target.value));
    }

    if (isLoading) {
        return <h2>Carregando ...</h2>;
    }

    return (
        <div>
            <div className="filter-header">
                <label>Digite um nome de cliente</label>
                <input
                    style={searchError ? { border: '1px solid red' } : {} }
                    type="text"
                    onChange={inputSearch} 
                    value={search} 
                    placeholder="Busque o usuario aqui" 
                />

            </div>
            <div>
                <ul>
                    {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default FilterList;