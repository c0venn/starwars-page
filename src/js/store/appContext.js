import React, { createContext, useEffect, useState } from "react";
import getState from "./flux";
export const Context = createContext(null);

export default function injectContext(PassedComponent) {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updateStore =>
					setState({
						store: Object.assign(state.store, updateStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.getPeople("https://www.swapi.tech/api/people?page=1&limit=6", {});
			state.actions.getPlanets("https://www.swapi.tech/api/planets?page=1&limit=6", {});
			state.actions.getStarships("https://www.swapi.tech/api/starships?page=1&limit=6", {});
			state.actions.getVehicles("https://www.swapi.tech/api/vehicles?page=1&limit=6", {});
			state.actions.getSpecies("https://www.swapi.tech/api/species?page=1&limit=6", {});
			state.actions.getFilms("https://www.swapi.tech/api/films?page=1&limit=6", {});
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};

	return StoreWrapper;
}
