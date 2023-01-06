import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSearch, actionSetUsers } from "../state/filterlist/actions";

const FilterList = () => {
    const users = useSelector(state => state.filterlist.users);
    const search = useSelector(state => state.filterlist.search);
    const dispatch = useDispatch();

    async function fetchUsers(search = '') {
        const result = await fetch(`https://jsonplaceholder.typicode.com/users${search}`);
        return await result.json();
    }

    // Exemplo em aula
    // não recomendado no mercado
    // por problemas de assíncronismo
    useEffect(() => {
        (async () => {
            const users = await fetchUsers();
            dispatch(actionSetUsers(users));
        })();
    }, [dispatch]);

    const inputSearch = async (event) => {
        dispatch(actionSearch(event.target.value));
        const filteredUsers = await fetchUsers('?name_like=' + event.target.value);
        dispatch(actionSetUsers(filteredUsers));
    }

    return (
        <div>
            <div className="filter-header">
                <label>Digite um nome de cliente</label>
                <input 
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