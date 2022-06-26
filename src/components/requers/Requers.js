import {useEffect, useState} from "react";
import Users from "../users/Users";

export default function Requers() {
    const [requers, setRequers] = useState([]);
    // const [user, setuser]= useState([])


    useEffect(()=>{
        fetch('https://reqres.in/api/users')
            .then(response=>response.json())
            .then(value => setRequers(value))
    },[]);

  return (<div >
      {
          requers.map((user, index) => <Users
      item={user}
      key={index}
      />)
      }

    </div>);
}