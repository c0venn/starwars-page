import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Pagination from "react-js-pagination";

const Characters = () => {
	const { store, actions } = useContext(Context);
	const { people } = store;
	const [page, setPage] = useState(1);

	const handleChangePage = pageNumber => {
		setPage(pageNumber);
		actions.getPeople(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
	};

	return (
		<div className="container my-4">
			<div className="row">
				{!!people.results.length > 0 ? (
					people.results.map((people, index) => (
						<div className="col-md-4" id={index} key={index}>
							<div className="card my-3 shadow">
								<img src="..." className="card-img-top" alt="img" />
								<div className="card-body">
									<h4 className="card-title text-center">{people.name}</h4>
								</div>
							</div>
						</div>
					))
				) : (
					<div className="col-md-12 p5 d-flex justify-content-center">
						<div className="spinner-border text-success my-5" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
			</div>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-center py-5">
					{!!people && people.results.length > 0 ? (
						<Pagination
							activePage={page}
							itemsCountPerPage={9}
							totalItemsCount={people.total_records}
							onChange={handleChangePage}
							itemClass="page-item"
							linkClass="page-link"
						/>
					) : (
						" "
					)}
				</div>
			</div>
		</div>
	);
};
export default Characters;
