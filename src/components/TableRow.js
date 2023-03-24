function TableRow({ item }) {
    return (
        <tr>
            <td>{item.Name}</td>
            <td>{item.Year}</td>
            <td>{item.Price}</td>
        </tr>)
}

export default TableRow;