const getState = ({ setStore }) => {
	return {
		store: {
			people: "",
			planets: "",
			vehicles: "",
			starships: ""
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(Response => {
						Response.json;
					})
					.then(data => {
						setStore({ people: data });
					})
					.catch(error => {
						console.error(error);
					});
			}
		}
	};
};

export default getState;
