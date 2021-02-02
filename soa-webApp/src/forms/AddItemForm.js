import React, { useState } from 'react'

const AddItemForm = props => {
    const initialFormState = { id: null, name: ''};
    const [ item, setItem ] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;

        setItem({ ...item, [name]: value })
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                console.log(item);
                var ok_item = {id: item.id, item: item.name};
                if (!ok_item.item) return;

                props.addItem(ok_item);
                setItem(initialFormState)
            }}
        >
            <label>Item</label>
            <input type="text" name="name" value={item.name} onChange={handleInputChange} />
            <button>Add new item</button>
        </form>
    )
};

export default AddItemForm;
