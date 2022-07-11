import {Link} from "react-router-dom";

export default function Comcomp({value}) {
    return (<div >

        <h3>{value.id} - {value.name} - <span><Link to={value.postId.toString()}>post</Link></span></h3>
        <h3>{value.body}</h3>

    </div>);
}