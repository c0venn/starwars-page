import React from "react";
import Home from "./components/home";
import Navbar from "../js/components/navbar";
import Characters from "./views/characters";
import Planets from "../js/views/planets";
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
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
