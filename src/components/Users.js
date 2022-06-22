// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js
// ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
//
//

import {useEffect, useState} from "react";
import User from "./user/User";

export default function Users() {
    const [users, setusers] = useState([]);
    const [user, setuser] = useState({});

    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setusers(value)
            });
    }, []);

    const userdetails = (userhead) => {
    setuser(userhead);
    };
  return (<div >
      {user.id && <div>{user.username} {user.company.name} </div>}
      <h2>USERS</h2>
      {users.map((user, index) => <User
          key={index}
          userhead={user}
          userdetails={userdetails}
      />)}
    </div>);
}





//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

