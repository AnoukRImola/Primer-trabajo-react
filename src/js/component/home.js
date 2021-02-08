import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			<Footer />
		</div>
	);
}
