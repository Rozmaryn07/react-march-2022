import {useEffect, useState} from "react";
import {getAlb} from "../dervice/Todoser";
import Albcomp from "../components/Tdcomp";

export default function AlbumsPage() {

    const [albums, setalbums] = useState([]);

    useEffect(()=>{
        getAlb().then((data)=>setalbums([...data]))
    },[]);

    return (<div >
        <h3>
           ALBUMS
        </h3>

        {
            albums.map(value => <Albcomp
                value={value}
                key={value.id}
            />)
        }


    </div>);
}

// albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums