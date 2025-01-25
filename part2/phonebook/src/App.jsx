import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "/components/Filter";
import FilteredRecords from "/components/FilteredRecords";
import Form from "/components/Form";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filter, setFilter] = useState("");

	const getInitialPersons = () => {
		console.log("effect");
		axios.get("http://localhost:3001/persons").then((response) => {
			console.log("🚀 ~ axios.get ~ response:", response)
			setPersons(response.data);
		});
	};
	useEffect(getInitialPersons, [])

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter setFilter={setFilter} />
			<h2>add a new</h2>
			<Form persons={persons} setPersons={setPersons} />
			<h2>Numbers</h2>
			<FilteredRecords persons={persons} filter={filter} />
		</div>
	);
};

export default App;
