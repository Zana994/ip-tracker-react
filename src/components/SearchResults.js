import AddressBox from './AddressBox'
import LocationBox from './LocationBox'
import TimeBox from './TimeBox'
import IspBox from './IspBox'

const SearchResults = ({ ip, city, country, zip, time, isp }) => {
    return (
        <div className="detailBox">
            <AddressBox iptitle={ip} />
            <LocationBox city={city} country={country} zip={zip} />
            <TimeBox time={time} />
            <IspBox isp={isp} />
        </div>
    )
}

export default SearchResults
