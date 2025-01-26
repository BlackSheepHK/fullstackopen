import { useState, useEffect } from "react";
import Filter from "/components/Filter";
import FilteredRecords from "/components/FilteredRecords";
import Form from "/components/Form";
import serverCommands from "/components/serverCommands";
import ColorMessage from "/components/ColorMessage"
import './index.css'

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filter, setFilter] = useState("");
	const [topMessage, setTopMessage] = useState(null)
	const [topMessageColor, setTopMessageColor] = useState(null)

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
			<ColorMessage message={topMessage} color={topMessageColor}/>
			<Filter setFilter={setFilter} />
			<h2>add a new</h2>
			<Form persons={persons} setPersons={setPersons} setTopMessage={setTopMessage} setTopMessageColor={setTopMessageColor} />
			<h2>Numbers</h2>
			<FilteredRecords persons={persons} setPersons={setPersons} filter={filter} setTopMessage={setTopMessage} setTopMessageColor={setTopMessageColor}/>
		</div>
	);
};

export default App;
