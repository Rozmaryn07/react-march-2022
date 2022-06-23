export default function Flight({fligh_tdetail, flight}) {
  return (<div >
      {flight.flight_number}
      <button onClick={()=>{
          fligh_tdetail(flight)
      }} >details</button>
    </div>);
}