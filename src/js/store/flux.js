const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: "null",
            planets: "null",
            vehicles: "null",
            starships: "null"
        },
        actions: {
            LoadingSomeData: () => {
                fetch("https://www.swapi.tech/api/people",{
                    method: 'Get',
                    headers: {
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({ people })
                 }));
					.then(res => res.json())
                .then(data => {
                    setStore({ people: data });
                }
					.catch(err => console.error(err));
        }
    }
};
};

export default getState;
