import axios from "axios";
const axIns = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/users',
    headers:{'Content-type': 'application/json; charset=UTF-8'}

});
const postuser=()=>axIns.post().then(response => response);
export {postuser}