import React from 'react'

const ItemTable = props => (
    <table>
        <thead>
        <tr>
            <th>Item</th>
        </tr>
        </thead>
        <tbody>
        {props.items.length > 0 ? (
            props.items.map(item => (
                <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>
                        <button
                            onClick={() => {
                                props.editRow(item)
                            }}
                            className="button muted-button"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => props.deleteItem(item.id)}
                            className="button muted-button"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No items</td>
            </tr>
        )}
        </tbody>
    </table>
);

export default ItemTable
