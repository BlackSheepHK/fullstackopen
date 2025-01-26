import Record from "/components/Record";

const FilteredRecords = ({ persons, setPersons, filter, setTopMessage, setTopMessageColor }) => {
	return (
		<div>
			{persons
				.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
				.map((person) => (
					<Record key={person.id} person={person} persons={persons} setPersons={setPersons} setTopMessage={setTopMessage} setTopMessageColor={setTopMessageColor} />
				))}
		</div>
	);
};

export default FilteredRecords;
