import {useEffect, useState} from "react";
import Flight from "./flight/Flight";

export default function Starts() {
  const [Starts, setStarts] = useState([]);
  const [flight, setflight] = useState({})
  useEffect(()=>{
    fetch("https://api.spacexdata.com/v3/launches/")
        .then(value => value.json())
        .then(value =>setStarts(value.filter(value=>value.launch_year!== '2020')))
  },[]);
  const fligh_tdetail = (flight) => {
    setflight( flight);
  };
  return (<div >

    {flight.flight_number && <div> {flight.mission_name} {flight.launch_year} {<img src={flight.links.mission_patch_small} alt="from HIMARS with love"   />} </div>}
    <h2>spacexdata</h2>

    {Starts.map((flight, index) =><Flight
      key={index}
      fligh_tdetail={fligh_tdetail}
      flight={flight}
    />)}

    </div>);
}