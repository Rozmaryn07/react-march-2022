import axios from "axios";
const axInst = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getToDo = ()=>axInst.get('/todos').then(value => value.data);
const getAlb = ()=>axInst.get('/albums').then(value => value.data);
const getCom = ()=>axInst.get('/comments').then(value => value.data);
const getPostCurrentComment = (id) => axInst.get('/posts/' + id).then(value => value.data)
export {getToDo, getCom, getAlb,getPostCurrentComment}