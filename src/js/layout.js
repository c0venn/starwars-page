import React from "react";
import Home from "./views/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

const Layout = () => {
	return (
		<div className="d-flex flex-column">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
