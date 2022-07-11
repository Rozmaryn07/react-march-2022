import {useEffect, useState} from "react";
import {getCom} from "../dervice/Todoser";
import Comcomp from "../components/Comcomp";
import {Outlet} from "react-router-dom";

export default function CommentsPage() {

    const [com, Setcom] = useState([]);

    useEffect(()=>{
        getCom().then((data)=>Setcom([...data]))
    },[]);

    return (<div >
        <h3>
            Comments
        </h3>


        {<Outlet/>}
        {
            com.map(value => <Comcomp
                value={value}
                key={value.id}
            />)
        }


    </div>);
}
// comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
// //     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
// //     id поста взяти з коментаря (postId)