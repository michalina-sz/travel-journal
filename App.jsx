import React from 'react';
import Navbar from './components/Navbar';
import PlaceBox from './components/PlaceBox';
import data from './data';

export default function App() {
	const places = data.map((item) => {
		return <PlaceBox key={item.id} {...item} />;
	});

	return (
		<div>
			<Navbar />
			<main>{places}</main>
		</div>
	);
}
