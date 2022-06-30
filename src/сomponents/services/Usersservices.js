import axios from "axios";
const axIns = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/comments',
    headers:{'Content-type': 'application/json; charset=UTF-8'}

});
const postcoment=(obj)=>axIns.post(obj).then(response => response);
export {postcoment}