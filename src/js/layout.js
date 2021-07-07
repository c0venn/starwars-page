import React from "react";
import Home from "./components/home";
import Navbar from "../js/components/navbar";
import Characters from "./views/characters";
import Planets from "../js/views/planets";
import Vehicles from "../js/views/vehicles";
import Starships from "../js/views/starships";
import Films from "../js/views/films";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

const Layout = () => {
	return (
		<div className="d-flex flex-column">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/characters" component={Characters} />
					<Route exact path="/planets" component={Planets} />
					<Route exact path="/vehicles" component={Vehicles} />
					<Route exact path="/starships" component={Starships} />
					<Route exact path="/films" component={Films} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
