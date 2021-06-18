import React from "react";

const Characters = () => {
	const { people } = store;

	return (
		<>
			<div className="container my-4">
				<div className="row">
					{people.results.map((character, index) => (
						<div className="col-md-4" key={index}>
							<div className="card my-3">
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h4 className="card-title text-center">{character.name}</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
export default Characters;
