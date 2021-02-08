import React from "react";

export function Card() {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://the1a.org/wp-content/uploads/sites/4/2017/05/9153767970_c287effc20_h-1500x844.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
