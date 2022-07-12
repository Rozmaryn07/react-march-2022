
export class PostIdComp  {
    _url = 'https://jsonplaceholder.typicode.com/posts';

    getPosts() {
        return fetch(this._url)
            .then(value => value.json());
    }

    getPost(id) {
        return fetch(this._url + '/' + id)
            .then(value => value.json());
    }

}