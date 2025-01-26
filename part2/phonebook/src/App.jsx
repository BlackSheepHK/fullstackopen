import { useState, useEffect } from "react";
import Filter from "/components/Filter";
import FilteredRecords from "/components/FilteredRecords";
import Form from "/components/Form";
import serverCommands from "/components/serverCommands";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filter, setFilter] = useState("");

	const getInitialPersons = () => {
		serverCommands.getPersons().then((response) => {
			console.log("🚀 ~ initialPersons ~ response:", response);
			setPersons(response);
		});
	};
	useEffect(getInitialPersons, []);

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter setFilter={setFilter} />
			<h2>add a new</h2>
			<Form persons={persons} setPersons={setPersons} />
			<h2>Numbers</h2>
			<FilteredRecords persons={persons} setPersons={setPersons} filter={filter} />
		</div>
	);
};

export default App;
