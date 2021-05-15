

const LocationBox = ({ city, country, zip }) => {
    return (
        <div className="location_box">
            <span>LOCATION</span>
            <div className="contentBox">
                <p> {city}, {country}, {zip} </p> 
            </div>
        </div>
    )
}

export default LocationBox
