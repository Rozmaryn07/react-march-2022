import {useEffect, useState} from "react";
import {carServ} from "../../services";
import Car from "../car/Car";
import CarFotm from "../carForm/CarFotm";

export default function Cars() {

  const [cars,setcars] = useState([]);

  useEffect(()=>{
    carServ.getAll().then(({data})=> setcars(data))
  }, [])

  const addcar = (car)=>{

    setcars([...cars, car])
  }

  return (<div >

    <CarFotm
        addcar={addcar}/>

    {cars.map(car => <Car
      // key={car.id}
        car={car}
      />)}

    </div>);
}