import serverCommands from "/components/serverCommands";

const DeleteButton = ({ id, name, persons, setPersons }) => {
	const deletePerson = () => {
		serverCommands.deletePerson(id).then((response) => {
			if (window.confirm(`Delete ${name}?`)) {
				console.log("Delete response", response);
				const updatedPersons = persons.filter((person) => person.id != id);
				setPersons(updatedPersons);
			}
		});
	};

	return <button onClick={() => deletePerson()}>delete</button>;
};

const Record = ({ person, persons, setPersons }) => {
	return (
		<div>
			{person.name} {person.number} <DeleteButton id={person.id} name={person.name} persons={persons} setPersons={setPersons} />
		</div>
	);
};

export default Record;
