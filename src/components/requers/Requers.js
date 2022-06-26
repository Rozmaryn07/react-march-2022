import {useEffect, useState} from "react";
import Users from "../users/Users";
import Detail from "../detail/Detail";

export default function Requers() {
    const [requers, setRequers] = useState([]);
    const [detail, setdetail]= useState(null)


    useEffect(()=>{
        fetch('https://reqres.in/api/users')
            .then(response=>response.json())
            .then(value => setRequers(value.data))
    },[]);

    const details = (item)=> {setdetail(item)};

  return (<div >

      {
          detail && <Detail
              detail={detail}

          />
      }
      {
          requers.map((user, index) => <Users
      item={user}
      key={index}
      details={details}

      />)}




    </div>);
}