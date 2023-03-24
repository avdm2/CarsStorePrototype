import { Button, Table } from "react-bootstrap";
import TableRow from "./TableRow";

function TablePageContent({ items, loadItems }) {

    return (
        <>
            <h1>Список товаров</h1>
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Название: </th>
                            <th>Год выпуска: </th>
                            <th>Цена: </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => <TableRow key={item.Name} item={item} />)}
                    </tbody>
                </Table>
                <Button onClick={loadItems}>Загрузить ещё</Button>
            </>
        </>
    )
}

export default TablePageContent;