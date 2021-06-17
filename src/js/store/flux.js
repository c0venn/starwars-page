const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: "null",
			planets: "null",
			vehicles: "null",
			starships: "null"
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => {
                        setStore({people: data});
                    }
					.catch(err => console.error(err));
            },
            getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => {
                        setStore({planets: data});
                    }
					.catch(err => console.error(err));
                },
            getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => {
                        setStore({vehicles: data});
                    }
                    .catch(err => console.error(err));
                },
                 getStartships: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then(res => res.json())
					.then(data => {
                        setStore({starships: data});
                    }
                    .catch(err => console.error(err));
                }
		}
	};
};

export default getState;
