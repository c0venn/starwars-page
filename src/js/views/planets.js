import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Pagination from "react-js-pagination";

const Planets = () => {
	const { store, actions } = useContext(Context);
	const { planets } = store;
	const [page, setPage] = useState(1);

	const handleChangePage = pageNumber => {
		setPage(pageNumber);
		actions.getPlanets(`https://www.swapi.tech/api/planets/?page=${pageNumber}&limit=6`);
	};

	return (
		<>
			<div className="row bg-custom rounded-3 py-1">
				{!!planets.results.length > 0 ? (
					planets.results.map((planets, index) => (
						<div className="col-md-4" id={index} key={index}>
							<div className="card my-3 shadow animate__bounceIn animate__faster">
								<img src="..." className="card-img-top" alt="img" />
								<div className="card-body">
									<h4 className="card-title fs-5 text-center">{planets.name}</h4>
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
					{!!planets && planets.results.length > 0 ? (
						<Pagination
							activePage={page}
							itemsCountPerPage={6}
							totalItemsCount={planets.total_records}
							onChange={handleChangePage}
							itemClass="page-item"
							linkClass="page-link"
						/>
					) : (
						" "
					)}
				</div>
			</div>
		</>
	);
};

export default Planets;
