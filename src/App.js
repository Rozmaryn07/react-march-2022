import {Users} from "./services";
import {useState} from "react";
import {getposts} from "./services";

function App() {
    const [posts,setposts] = useState([]);
    const post=(id)=>{
        getposts(id).then(({data})=>setposts([...data]));
    }
  return (
    <div >

        <h3>POSTS</h3>
        <hr/>
            {
                posts.map(value => <div> <br/> {value.id} - {value.title}
                  <br/>   <b>body</b> -{value.body} <br/>
                </div>)
            }
        <hr/>
<Users post={post} />

    </div>);
}

export default App;
