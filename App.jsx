import React from 'react';
import Navbar from './components/Navbar';
import PlaceBox from './components/PlaceBox';
import data from './data';

export default function App() {
	const places = data.map((item) => {
		return <PlaceBox {...item} />;
	});

	return (
		<div>
			<Navbar />
			<main>{places}</main>
		</div>
	);
}
