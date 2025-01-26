import Record from "/components/Record";

const FilteredRecords = ({ persons, setPersons, filter }) => {
	return (
		<div>
			{persons
				.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
				.map((person) => (
					<Record key={person.id} person={person} persons={persons} setPersons={setPersons} />
				))}
		</div>
	);
};

export default FilteredRecords;
