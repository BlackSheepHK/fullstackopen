import Record from "/components/Record";

const FilteredRecords = ({ persons, filter }) => {
	return (
		<div>
			{persons
				.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
				.map((person) => (
					<Record person={person} key={person.id} />
				))}
		</div>
	);
};

export default FilteredRecords;
