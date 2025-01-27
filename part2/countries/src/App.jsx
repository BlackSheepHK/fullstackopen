import axios from "axios";
import { useEffect, useState } from "react";

const ShowCityWeather = ({ cityWeather }) => {
	console.log("Showing city weather", cityWeather);
	if (cityWeather != {}) {
		return (
			<div>
				<p>temperature {cityWeather?.main?.temp} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${cityWeather?.weather?.[0]?.icon}.png`} />
        <p>wind {cityWeather?.wind?.speed} m/s</p>
			</div>
		);
	}
};

const ShowCountryInfo = ({ countryInfo }) => {
	const [cityWeather, setCityWeather] = useState({});

	useEffect(() => {
		console.log("Requesting weather info.");
		const city = countryInfo.capital[0];
		const lat = countryInfo.capitalInfo.latlng[0];
		const lon = countryInfo.capitalInfo.latlng[1];
		const api_key = import.meta.env.VITE_SOME_KEY;

		if (city) {
			axios
				.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
				.then((response) => {
					console.log("Weather info received:", response.data);
					setCityWeather(response.data);
				});
		}
	}, [countryInfo]);

	return (
		<div>
			<h1>{countryInfo.name.common}</h1>
			<p>capital {countryInfo.capital.join(",")}</p>
			<p>area {countryInfo.area}</p>
			<p>
				<b>languages:</b>
			</p>
			<ul>
				{Object.values(countryInfo.languages).map((language) => (
					<li key={language}>{language}</li>
				))}
			</ul>
			<img src={countryInfo.flags.png} />
			<h2>Weather in {countryInfo.capital[0]}</h2>
			<ShowCityWeather cityWeather={cityWeather} />
		</div>
	);
};

const FilteredCountries = ({ nameList, searchString, setSearchString }) => {
	const [singleCountry, setSingleCountry] = useState("");
	const [countryInfo, setCountryInfo] = useState(null);

	const matchedNames = nameList.filter((name) => name.toLowerCase().includes(searchString.toLowerCase()));
	console.log("🚀 ~ filteredCountries ~ matchedNames:", matchedNames);

	useEffect(() => {
		console.log("Single country updated. Now requesting country info.");
		if (singleCountry) {
			axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${singleCountry}`).then((response) => {
				console.log("Country info set to:", response.data);
				setCountryInfo(response.data);
			});
		}
	}, [singleCountry]);

	if (matchedNames.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	} else if (matchedNames.length === 1) {
		if (matchedNames[0] != singleCountry) {
			setSingleCountry(matchedNames[0]);
		}

		if (countryInfo != null) {
			return <ShowCountryInfo countryInfo={countryInfo} />;
		}
	} else {
		return (
			<div>
				{matchedNames.map((name) => (
					<div key={name}>
						{name}
						<button onClick={() => setSearchString(name)}>show</button>
					</div>
				))}
			</div>
		);
	}
};

const App = () => {
	const [nameList, setNameList] = useState([]);
	const [searchString, setSearchString] = useState("");

	useEffect(() => {
		console.log("Requesting country list");
		axios
			.get("https://studies.cs.helsinki.fi/restcountries/api/all")
			.then((response) => {
				console.log("Response received. Length:", response.data.length);
				const nameList = response.data.map((country) => country.name.common);
				console.log("🚀 ~ useEffect ~ nameList:", nameList);
				setNameList(nameList);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleFilterChange = (event) => {
		console.log("Update filter to", event.target.value);
		setSearchString(event.target.value);
	};

	return (
		<div>
			find countries <input onChange={handleFilterChange} value={searchString} />
			<FilteredCountries nameList={nameList} searchString={searchString} setSearchString={setSearchString} />
		</div>
	);
};

export default App;
