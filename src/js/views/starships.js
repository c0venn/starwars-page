import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Pagination from "react-js-pagination";

const Starships = () => {
	const { store, actions } = useContext(Context);
	const { starships } = store;
	const [page, setPage] = useState(1);

	const handleChangePage = pageNumber => {
		setPage(pageNumber);
		actions.getStarships(`https://www.swapi.tech/api/starships/?page=${pageNumber}&limit=6`);
	};

	return (
		<>
			<div className="row bg-custom rounded-3 py-1">
				{!!starships.results.length > 0 ? (
					starships.results.map((starships, index) => (
						<div className="col-md-4" id={index} key={index}>
							<div className="card my-3 shadow animate__bounceIn animate__faster">
								<img src="..." className="card-img-top" alt="img" />
								<div className="card-body">
									<h4 className="card-title fs-5 text-center">{starships.name}</h4>
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
					{!!starships && starships.results.length > 0 ? (
						<Pagination
							activePage={page}
							itemsCountPerPage={6}
							totalItemsCount={starships.total_records}
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
export default Starships;
