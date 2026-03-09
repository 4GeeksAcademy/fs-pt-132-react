import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar"; // lazy loading ---> priorizar esta
import { Card } from "./Card";
import componenteRoto from "./componenteRoto";

//create your first component
const Home = () => {

	console.log('estoy en home')

	const infoDeCard = 'info';



	return (
		<div className="text-center">
			<Navbar />
			<p>
				aqui hay un componente roto.... buscalo y arreglalo
			</p>
			<componenteRoto />
			<h1 className="text-center mt-5">Hello Pepe!</h1>
			<p className="miColor" >
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... pepe is ok...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			{infoDeCard && <Card />}
			<Card />
			<div className="row">

				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
				
			</div>

		</div>
	);
};

export default Home;