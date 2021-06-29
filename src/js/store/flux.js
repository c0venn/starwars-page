const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: null,
			planets: null,
			vehicles: null,
			starships: null,
			species: null,
			films: null,
			error: null
		},
		actions: {
			getPeople: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error({ message: "Error al consultar personajes" });
					const data = await response.json();
					setStore({
						people: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			getPlanets: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error({ message: "Error al consultar personajes" });
					const data = await response.json();
					setStore({
						people: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			getSpecies: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error({ message: "Error al consultar personajes" });
					const data = await response.json();
					setStore({
						people: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			getVehicles: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error({ message: "Error al consultar personajes" });
					const data = await response.json();
					setStore({
						people: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			getStarships: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error({ message: "Error al consultar personajes" });
					const data = await response.json();
					setStore({
						people: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			},
			getFilms: async (
				url,
				options = {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				}
			) => {
				try {
					const response = await fetch(url, options);
					if (response.status !== 200) throw new Error({ message: "Error al consultar personajes" });
					const data = await response.json();
					setStore({
						people: data
					});
				} catch (error) {
					setStore({
						error: error.message
					});
				}
			}
		}
	};
};

export default getState;
