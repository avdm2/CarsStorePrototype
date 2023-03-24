import { useAuth } from "../hooks/use-auth";
import { useState, useEffect, useCallback } from "react";
import TablePageContent from "../components/TablePageContent";
import { loadItemsList } from "../network/items";
import { Link } from "react-router-dom";

function IndexPage() {
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(null);
    const { isAuth, email } = useAuth();

    useEffect(() => {
        (async () => {
            const { offset: newOffset, records } = await loadItemsList(10, null);
            setOffset(newOffset);
            setItems(records);
        })()
    }, []);

    const loadMoreItems = useCallback(async () => {
        const { offset: newOffset, records } = await loadItemsList(10, offset);

        setOffset(newOffset);
        setItems(items => ([...items, ...records]));
    }, [offset]);

    return isAuth ?
        <TablePageContent items={items} loadItems={loadMoreItems} /> : (
            <div>
                <h1>
                    Для просмотра каталога нужно <Link to="/">авторизоваться!</Link>
                </h1>
            </div>
        )
}

export default IndexPage;