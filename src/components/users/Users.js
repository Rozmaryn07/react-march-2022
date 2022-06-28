import {useEffect, useState} from "react";
import {getuser} from "../../services";
import {Posts} from "../../services";

export default function Users({post}) {
    const [users,setusers]=useState([]);

    useEffect(()=>{
        getuser().then(({data})=>setusers([...data]))},
        []);
  return (<div >
      {
          users.map(value => <Posts
          item={value}
          key={value.id}
          post={post}
          />)
      }

    </div>);
}









// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в
//     Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси