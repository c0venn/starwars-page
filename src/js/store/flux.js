const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people,
			planets,
			vehicles,
			starships
		},
		actions: {
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api")
					.then(res => res.json())
					.then(data => console.log(data))
					.catch(err => console.error(err));
            }
		}
	};
};

export default getState;
