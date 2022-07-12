import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.value = this.props.value;
    }


    // componentDidMount() {
    //     console.log('mount');
    // }
    //
    // componentWillUnmount() {
    //     console.log('unmount');
    // }

    render() {
        return (
            <div>
                <b>{this.value.id}</b> <br/>
                 <b>Title</b> - {this.value.title} <br/>
                <b>Body</b> - {this.value.body}
            </div>
        );
    }
}

export default Post;