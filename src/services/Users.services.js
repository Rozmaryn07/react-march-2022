import axios from "axios";
const axInst = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});
    const getuser =()=>axInst.get().then(value => value);
     const getposts=(id)=>axInst.get('/'+ id+ '/posts').then(value => value) ;

export {getuser,getposts}