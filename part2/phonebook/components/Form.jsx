import { useState } from "react";

const Form = ({ persons, setPersons }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			id: String(persons.length + 1),
			name: newName,
			number: newNumber,
		};
		console.log("🚀 ~ addPerson ~ personObject:", personObject);
		if (persons.map((person) => person.name).includes(personObject.name)) {
			alert(`${personObject.name} is already added to phonebook`);
		} else {
			setPersons(persons.concat(personObject));
			setNewName("");
			setNewNumber("");
		}
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<form onSubmit={addPerson}>
			<div>
				name: <input value={newName} onChange={handleNameChange} />
			</div>
			<div>
				number: <input value={newNumber} onChange={handleNumberChange} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default Form;
