import React, {Component} from 'react';

import Post from "./Post";
import {PostIdComp} from "../services/post.id.comp";

class Posts extends Component {
    state = {posts:[]}

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.postsApiserv = new PostIdComp;
        this.postsApiserv.getPosts().then(value => this.setState({posts: value}));
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(value => <Post key={value.id} value={value}></Post>)}
            </div>
        );
    }
}

export default Posts;