import React from 'react';

export default function PlaceBox(props) {
	console.log(props);
	return (
		<div className='placebox'>
			<img src={`${props.imageUrl}`} alt='' className='placebox--img' />
			<div className='placebox--place-info'>
				<div className='placebox--location'>
					<i class='fa-solid fa-location-dot'></i>
					<p>{props.location}</p>
					<a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
				</div>
				<h2 className='placebox--title'>{props.title}</h2>
				<p className='placebox--date'>{`${props.startDate} - ${props.endDate}`}</p>
				<p className='placebox--description'>{props.description}</p>
			</div>
		</div>
	);
}
