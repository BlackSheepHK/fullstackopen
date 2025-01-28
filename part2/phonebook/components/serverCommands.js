import axios from "axios";

const baseUrl = "/api/persons";

const getPersons = () => {
	return axios.get(baseUrl).then((response) => {
		console.log("🚀 ~ getPersons ~ response:", response);
		return response.data;
	});
};

const createPerson = (personObject) => {
	return axios.post(baseUrl, personObject);
};

const updatePerson = (id, personObject) => {
	return axios.put(`${baseUrl}/${id}`, personObject);
};

const deletePerson = (id) => {
	console.log("Delete request url:", `${baseUrl}/${id}`);
	return axios.delete(`${baseUrl}/${id}`);
};

export default { getPersons, createPerson, updatePerson, deletePerson };
