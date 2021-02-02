import React, { useState, useEffect, Fragment } from 'react';
import AddPetForm from './forms/AddPetForm';
import EditPetForm from './forms/EditPetForm';
import PetTable from './tables/PetTable';
import PetService from "./api/petApi";
import ItemService from "./api/itemApi";
import ItemTable from "./tables/ItemTable";
import AddItemForm from "./forms/AddItemForm";
import EditItemForm from "./forms/EditItemForm";

const App = () => {
	const initialFormState = { id: null, name: '', age: '', description: '' };

	// Setting state
	const [ items, setItems ] = useState([]);
	const [ currentItem, setCurrentItem ] = useState(initialFormState);
	const [ editing_items, setEditingItem ] = useState(false);
	const [ itemsApi] = useState(new ItemService());

	const [ pets, setPets ] = useState([]);
	const [ currentPet, setCurrentPet ] = useState(initialFormState);
	const [ editing, setEditing ] = useState(false);
	const [ petsApi] = useState(new PetService());

	useEffect(() => {
		petsApi.retrieveItems()
			.then( response => {
				setPets(response)
			})
	}, []);

	useEffect(() => {
		itemsApi.retrieveItems()
			.then(response => {
				setItems(response)
			})
	}, []);

	// CRUD operations
	const addPet = pet => {
		pet.id = pets.length + 1;

		petsApi.createItem(pet)
			.then( () => {
				setPets([ ...pets, pet ])
			})
	};

	const addItem = item => {
		item.id = items.length + 1;

		itemsApi.createItem(item)
			.then( () => {
				setItems( [...items, item ])
			})
	};

	const deletePet = id => {
		setEditing(false);

		petsApi.deleteItem(id)
			.then(() => {
				setPets(pets.filter(pet => pet.id !== id))
			});
	};

	const deleteItem = id => {
		setEditingItem(false);

		itemsApi.deleteItem(id)
			.then(() => {
				setItems(items.filter(item => item.id !== id))
			});
	};

	const updatePet = (id, updatedPet) => {
		console.log(id);
		console.log(updatedPet);
		setEditing(false);

		petsApi.updateItem(updatedPet, id)
			.then(() => {
				setPets(pets.map(pet => (pet.id === id ? updatedPet : pet)))
			});
	};

	const updateItem = (id, updatedItem) => {
		console.log(id);
		console.log(updatedItem);
		setEditing(false);
		itemsApi.updateItem(updatedItem, id)
			.then(() => {
				setItems(items.map(item => (item.id === id ? updatedItem : item)))
			});
	};

	const editRowPet = pet => {
		setEditing(true);

		setCurrentPet({ id: pet.id, name: pet.name, age: pet.age, description: pet.description })
	};

	const editRowItem = item => {
		setEditingItem(true);

		setCurrentItem({id: item.id, name: item.item});
	};

	return (
		<div className="container">
			<h1>Pet Finder</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit pet</h2>
							<EditPetForm
								editing={editing}
								setEditing={setEditing}
								currentPet={currentPet}
								updatePet={updatePet}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add pet</h2>
							<AddPetForm addPet={addPet} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Pets</h2>
					<PetTable pets={pets} editRow={editRowPet} deletePet={deletePet} />
				</div>
			</div>
			<h1>Item Finder</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing_items ? (
						<Fragment>
							<h2>Edit item</h2>
							<EditItemForm
								editing={editing_items}
								setEditing={setEditingItem}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add item</h2>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Items</h2>
					<ItemTable items={items} editRow={editRowItem} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
};

export default App
