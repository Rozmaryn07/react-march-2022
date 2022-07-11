import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPostCurrentComment} from "../../dervice/Todoser";
import Postpage from "../Postpage";

function Post() {

    const {postId} = useParams();

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        getPostCurrentComment(postId).then(value => setPosts([{...value}]))
    },[postId])
    return (
        <div>
            {
                posts.map(value => <Postpage value={value} key={value.id}/>)
            }
        </div>
    );
}

export default Post;