import React from "react";

export default function PlaceBox(props) {
    console.log(props)
    return (
        <div className="place-box">
            <img src={`${props.imageUrl}`} alt="" className="place-box--img" />
            <div className="place-box--header">
                <div className="location">
                    <p>{props.location}</p>
                    <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h2 className="title">{props.title}</h2>
            </div>
            <p className="place-box--date">{`${props.startDate} - ${props.endDate}`}</p>
            <p className="place-box--description">{props.description}</p>
        </div>
    )
}