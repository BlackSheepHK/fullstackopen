import { useState } from "react";
import serverCommands from "/components/serverCommands";

const Form = ({ persons, setPersons, setTopMessage, setTopMessageColor }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const fiveSecondMessage = (message, color) => {
		setTopMessage(message);
		setTopMessageColor(color);
		setTimeout(() => {
			setTopMessage(null);
		}, 5000);
	};

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
		};
		console.log("🚀 ~ addPerson ~ personObject:", personObject);
		if (persons.map((person) => person.name).includes(personObject.name)) {
			if (confirm(`${personObject.name} is already added to phonebook, replace the old number with the new one?`)) {
				const id = persons.find((person) => person.name === personObject.name).id;
				serverCommands.updatePerson(id, personObject).then((response) => {
					console.log("Updated new person", response.data);
					const updatedPersons = persons.map((person) => (person.id === id ? response.data : person));
					setPersons(updatedPersons);
					fiveSecondMessage(`Updated ${personObject.name}'s number`, "green");
				});
			}
		} else {
			serverCommands.createPerson(personObject).then((response) => {
				setPersons(persons.concat(response.data));
				console.log("Added new person", response.data);
				fiveSecondMessage(`Added ${personObject.name}'s number`, "green");
				setNewName("");
				setNewNumber("");
			});
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
