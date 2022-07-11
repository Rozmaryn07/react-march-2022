import {useEffect, useState} from "react";
import {getToDo} from "../dervice/Todoser";
import Tdcomp from "../components/Tdcomp";

export default function TodosPage() {

    const [Todos, Settodos] = useState([]);

    useEffect(()=>{
        getToDo().then((data)=>Settodos([...data]))
    },[]);

  return (<div >
      <h3>
          TO DO
      </h3>

      {
          Todos.map(value => <Tdcomp
          value={value}
          key={value.id}
          />)
      }


    </div>);
}


// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos