import serverCommands from "/components/serverCommands";

const DeleteButton = ({ id, name, persons, setPersons, setTopMessage, setTopMessageColor }) => {
	const fiveSecondMessage = (message, color) => {
		setTopMessage(message);
		setTopMessageColor(color);
		setTimeout(() => {
			setTopMessage(null);
		}, 5000);
	};

	const deletePerson = () => {
		if (window.confirm(`Delete ${name}?`)) {
			serverCommands
				.deletePerson(id)
				.then((response) => {
					console.log("Delete response", response);
					const updatedPersons = persons.filter((person) => person.id != id);
					setPersons(updatedPersons);
					fiveSecondMessage(`Deleted ${name}`, "green");
				})
				.catch((error) => {
					fiveSecondMessage(`${name} does not exist/has already been deleted`, "red")
				});
		}
	};

	return <button onClick={() => deletePerson()}>delete</button>;
};

const Record = ({ person, persons, setPersons, setTopMessage, setTopMessageColor }) => {
	return (
		<div>
			{person.name} {person.number} <DeleteButton id={person.id} name={person.name} persons={persons} setPersons={setPersons} setTopMessage={setTopMessage} setTopMessageColor={setTopMessageColor}/>
		</div>
	);
};

export default Record;
