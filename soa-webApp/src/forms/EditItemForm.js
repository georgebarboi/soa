import React, { useState, useEffect } from 'react'

const EditItemForm = props => {
    const [ item, setItem ] = useState(props.currentItem);

    useEffect(
        () => {
            setItem(props.currentItem)
        },
        [ props ]
    );
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target;

        setItem({ ...item, [name]: value })
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                var ok_item = {id: item.id, item: item.name};
                props.updateItem(ok_item.id, ok_item)
            }}
        >
            <label>Item Name</label>
            <input type="text" name="name" value={item.name} onChange={handleInputChange} />
            <button>Update item</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
};

export default EditItemForm
