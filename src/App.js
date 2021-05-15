import Header from './components/Header'
import SearchResults from './components/SearchResults'
import Map from './components/Map'
import { useState, useEffect } from 'react'


function App() {
  const [ipData, setIpData] = useState({
    ipAddress: '',
    city: '',
    country: '',
    zip: '',
    time: '',
    isp: ''
  })
  const [coordinates, setCoordinates] = useState({x: 0, y: 0})
  const [fetchIp, setFetchIp] = useState('')

  useEffect(() => {
    fetch(`https://ipapi.co/${fetchIp}/json/`)
    .then(results => results.json())
    .then(data => {
      setIpData({
        ipAddress: data.ip,
        city: data.city,
        country: data.country_name,
        zip: data.postal,
        time: data.utc_offset,
        isp: data.org
      })
      setCoordinates({x: data.latitude, y: data.longitude})
    })
    .catch(error => {
      alert("Unable to get IP details")
      console.log(error)
    })
  }, [fetchIp])
    
  function changeValue(value) {
    setFetchIp(value)
  }

  return (
    <div className="container">
      <Header newDetails={changeValue} />
      <SearchResults ip={ipData.ipAddress} city={ipData.city} country={ipData.country} zip={ipData.zip} time={ipData.time} isp={ipData.isp} />
      <Map coord={coordinates} />
      <p className="name">Challenge by Frontend Mentor. Coded by Zana.</p>
    </div>
  );
}

export default App;
